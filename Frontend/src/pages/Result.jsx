import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { GetScore, SubmitFeedback } from '../api';
import VeryEasy from '../assets/veryEasy.png';
import Easy from '../assets/Easy.png';
import Simple from '../assets/Medium.png';
import Hard from '../assets/Hard.png';
import VeryHard from '../assets/veryHard.png';
import Verified from '../assets/VerifyedIcon.png';
import { useSelector } from 'react-redux';
import { 
  FeedbackSection, 
  FeedContainer, 
  FeedContent, 
  InputGroup, 
  MainContainer, 
  RatingContent, 
  ResultContainer, 
  ResultSubContainer, 
  ScoreSection, 
  UrId, 
  UrScore 
} from '../styles/ResultStyles';
import { Link } from 'react-router';

function Result() {
  const [score, setScore] = useState(null);
  const [comment, setComment] = useState("");  
  const [selectedRating, setSelectedRating] = useState(null);  // New state for emoji selection

  const scoreData = useSelector((state) => state.userData.userInfo);
  const userId = scoreData?.userId;

  useEffect(() => {
    if (userId) {
      GetScore(userId)
        .then((data) => {
          setScore(data);
        })
        .catch(err => console.error("Error fetching score:", err));
    }
  }, [userId]);

  async function handleSubmit() {
    if (!userId) {
        alert("User ID is missing!");
        return;
    }

    if (!selectedRating) {
        alert("Please select a rating before submitting feedback!");
        return;
    }

    try {
        const response = await SubmitFeedback({ 
            userId, 
            rating: selectedRating,  
            feedback: comment.trim() || null 
        });
        alert(response.message); // Show success message
        
        // Reset feedback after submission
        setComment("");
        setSelectedRating(null);
    } catch (err) {
        alert("Error submitting feedback. Please try again.");
        console.error("Feedback error:", err.message);
    }
}


  return (
    <div>
      <Header />
      <MainContainer>
        <ScoreSection>
          <ResultContainer>
            <img src={Verified} alt="Confirmed" />
            <h2>Congratulations! You've Completed The Test</h2>
            <ResultSubContainer>
              <UrScore>Your Score: <span>{score?.totalScore || "N/A"}</span></UrScore>
              <UrId>Your ID: {userId?.replace(/\D/g, '').slice(-6) || "N/A"}</UrId>
            </ResultSubContainer>
          </ResultContainer>
        </ScoreSection>

        <FeedbackSection>
          <FeedContainer>
          <FeedContent>
            <h1>Feedback</h1>
            <h3>Give us a feedback!</h3>
          <p>Your input is important for us. We take customer feedback very seriously.</p>
          </FeedContent>
          <RatingContent>
         
            {[VeryEasy,Easy,Simple,Hard,VeryHard].map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedRating(5 - index)}  
                aria-label={`Feedback rating ${5 - index}`}
                style={{ 
                  border: selectedRating === 5 - index ? "2px solid blue" : "none"
                }}  
              >
                <img src={img} alt={`Rating ${5 - index}`} />
              </button>
            ))}
          </RatingContent>
          <InputGroup>
          <input 
            type="text" 
            placeholder="Add a comment" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
          />
          <button onClick={handleSubmit} disabled={!selectedRating}>
            Submit Feedback
          </button>
          </InputGroup>
          </FeedContainer>
        </FeedbackSection>
        <div>
        <Link to={"/question"}><button>Back to Home</button></Link>
      </div>
      </MainContainer>
      
    </div>
  );
}

export default Result;
