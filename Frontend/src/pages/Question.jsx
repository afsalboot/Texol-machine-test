import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { QuestionDisplay, SaveScore } from "../api";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Timer from "../assets/clock.png";
import ArrowRight from "../assets/arrow-right.png";
import ArrowLeft from "../assets/arrow-left.png";
import { 
  Button, Card, MainContainer, Options, ProgressBarContainer, 
  ProgressBarFill, ProgressText, QuestionContainer, 
  QuestionMainContainer, QuestionText, SubContainer, 
  TimerContainer 
} from '../styles/QuestionStyles';

function Question() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [questionData, setQuestionData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  const userInfo = useSelector((state) => state.userData.userInfo);
  const userId = userInfo?.userId;
  
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await QuestionDisplay();
        if (data?.length) {
          setQuestionData(data.sort((a, b) => a.id - b.id));
        }
      } catch (err) {
        console.error("Error fetching questions:", err.message);
      }
    }
    if (questionData.length === 0) {
      fetchQuestions();
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 || completed) {
      handleSubmit(score);
    } else {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, completed]);

  const currentQuestion = useMemo(() => questionData[currentIndex], [questionData, currentIndex]);

  const handleOptionSelect = (option) => setSelectedOption(option);

  const handleNext = async () => {
    if (!selectedOption) return alert("Please select an answer.");
  
    let newScore = score;
    if (selectedOption === currentQuestion.correctAnswer) {
      newScore = score + 2; // Increase score by 2 for correct answers
      setScore(newScore);
    }
  
    if (currentIndex === questionData.length - 1) {
      await handleSubmit(newScore);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };
  

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = async (finalScore = score) => {
    if (completed) return;
    try {
      await SaveScore({ score: finalScore, userId, dispatch });
      setCompleted(true);
      navigate("/result");
    } catch (err) {
      console.error("Error saving score:", err.message);
    }
  };

  const progressPercentage = useMemo(() => 
    questionData.length > 0 ? ((currentIndex + 1) / questionData.length) * 100 : 0
  , [currentIndex, questionData]);

  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar questionData={questionData} currentIndex={currentIndex} />
        <SubContainer>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "30px" }}>
            <ProgressBarContainer>
              <ProgressBarFill style={{ width: `${progressPercentage}%` }} />
              <ProgressText>
                {currentIndex + 1}/{questionData.length}
              </ProgressText>
            </ProgressBarContainer>
            <TimerContainer>
              <img src={Timer} alt="Timer" />
              <p>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
            </TimerContainer>
          </div>

          {currentQuestion ? (
            <QuestionMainContainer>
              <QuestionContainer>
                <span>{currentIndex + 1}</span> 
                <QuestionText>{currentQuestion.question}</QuestionText>
              </QuestionContainer>
              <Card>
                {currentQuestion.options.map((option, index) => (
                  <Options 
                    key={index} 
                    onClick={() => handleOptionSelect(option)}
                    style={{ 
                      backgroundColor: selectedOption === option ? 
                        (option === currentQuestion.correctAnswer ? "#E7FFD9" : "#ffd9d9") : "white",
                    }}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedOption === option}
                      readOnly
                    />
                    {option}
                  </Options>
                ))}
              </Card>
              
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Button onClick={handlePrevious} disabled={currentIndex === 0}>
                  <img src={ArrowLeft} alt="Previous" />
                  Previous
                </Button>

                <Button onClick={handleNext} disabled={!selectedOption}>
                  {currentIndex === questionData.length - 1 ? "Submit" : "Next"}
                  <img src={ArrowRight} alt={currentIndex === questionData.length - 1 ? "Submit" : "Next"} />
                </Button>
              </div>
            </QuestionMainContainer>
          ) : (
            <h2>Loading...</h2>
          )}
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default Question;