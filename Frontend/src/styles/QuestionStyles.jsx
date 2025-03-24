import styled from "styled-components";
import Poppins from '../assets/Poppins-Light.ttf'
import Inter from '../assets/Inter-VariableFont_opsz,wght.ttf'

export const SidebarContainer = styled.div`
  width: ${({ $isOpen }) => ($isOpen ? "250px" : "0")};
  overflow: hidden;
  transition: width 0.3s ease;
  background: #fff;
  box-shadow: ${({ $isOpen }) => ($isOpen ? "2px 0 5px rgba(0, 0, 0, 0.2)" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`


export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const SubContainer = styled.div`
  width: 908px;
  height: 460px;
  background-color: #F4F4F4;
  box-shadow: 0px 4px 18px 0px #00000014;

  `



export const ProgressBarContainer = styled.div`
width: 679px;
height: 7px;
background-color: #E4E4E4; 
border-radius: 6px;
overflow: hidden;
margin-bottom: 10px;
`



export const ProgressBarFill = styled.div`
height: 679px;
background-color: #2A586F;
transition: width 0.3s ease-in-out; 
`

export const ProgressText = styled.div`
  position: absolute;
  top: -25px;
  right: 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`


export const QuestionMainContainer = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  gap: 20px;
`


export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  Span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 51px;
    font-size: 21.6px;
    border-radius: 100%;
    background-color: #2A586F;
  }
`
export const Card = styled.div`
    width  : 847px;
    height: 391px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    
`

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 82px;
  height: 36px;
  background-color: #FAC167;
  border-radius: 3px;

  font-face {
      font-family: 'Inter';
      src: url(${Inter}) format('opentype');
      }
  
      font-family: 'Inter', sans-serif;
      font-size: 15.77px;
      font-weight: 400;

  img{
    width: 20px;
    height: 20px;
  }
`
export const QuestionText = styled.p`
  font-face {
      font-family: 'Poppins';
      src: url(${Poppins}) format('opentype');
      }
  
      font-family: 'Poppins', sans-serif;
      font-size: 21.6px;
      font-weight: 600;
`
export const Options = styled.li`
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 200px;
    height: 51px;
    font-face {
      font-family: 'Poppins';
      src: url(${Poppins}) format('opentype');
      }
  
      font-family: 'Poppins', sans-serif;
      font-size: 20.6px;
      font-weight: 600;
      margin-left: 50px;
      margin-top: 20px;

      input {
        width: 18px;
        height: 18px;
      }
`

export const Button = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #2A586F;
  width: 113px;
  height: 37px;
  border-radius: 3px;
  cursor: pointer;
  color: #FFFFFF;

 
    
  

  img{
    width: 26.49px;
    height: 26.49px;
  }
`
// export const  = styled