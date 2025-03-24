import axios from 'axios'
import { storeUser } from './Redux/AuthSlice'
import { setUserScore } from './Redux/ScoreSlice';



export const SignupUser = async (data) =>{
    console.log("Signup request data:",data);
    try {
        const response = await axios.post("http://localhost:3000/api/auth/register",data)
        console.log("Signup API response:",response)
        return response.data;
    } catch (err) {
        console.log("Signup API error:",err.message)
    }
}

export const LoginUser = async (data, dispatch) => {
    console.log("Login request data",data);
    try{
        const response = await axios.post("http://localhost:3000/api/auth/verifyUser",data);
        console.log("Login response",response.data);
        dispatch(storeUser(response.data));
        return response.data;
    }catch(err){
        console.log("Login api error",err.message);
    }
}

export const QuestionDisplay = async (data, ) => {
    console.log("Question Request data",data);
    try{
        const response = await axios.get("http://localhost:3000/api/question/displayQuestion",data)
        console.log("question responce",response.data.questions)
        return response.data.questions
    }catch(err){
        console.log("error from api question",err.message)
    }
}

export const SaveScore = async (data,dispatch) => {
    console.log("Submission request data",data)
    try {
        const response = await axios.post("http://localhost:3000/api/test/submit-Test",data)
        console.log("submission response",response.data)
        dispatch(setUserScore(response.data))
        return response.data
    } catch (err) {
        console.log("submission error",err.message)
    }
}

export const GetScore = async (scoreId) => {
    console.log("get scoreid",scoreId)
    try {
      const response = await axios.get(
        `http://localhost:3000/api/test/get-score/${scoreId}`
      );
      console.log(" getscore response",response.data)
      return response.data;
    } catch (err) {
      console.log("getscore error", err.message);
      throw err;
    }
  };



  export const SubmitFeedback = async (data) => {
      try {
          const response = await axios.post('http://localhost:3000/api/feed/submitFeedback', data);
          console.log("Feedback response:", response.data);
          return response.data;
      } catch (err) {
          console.error("Feedback post error:", err.message);
          throw new Error(err.response?.data?.message || "Failed to submit feedback");
      }
  };
  