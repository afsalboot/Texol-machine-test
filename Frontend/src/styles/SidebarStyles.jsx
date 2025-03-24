import styled from "styled-components";
import poppins from '../assets/Poppins-Light.ttf'

export const SidebarContainer = styled.div`
  width: 250px;
  height: 645px;
  background: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 140px;
  right: -40px;
  background: #fff;
  border: none;
  cursor: pointer;
`;

export const QuestionImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  img{
    width: 255.51;
    height: 100.44;
  }
`

export const QuestionButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
          button {
        width: 56px;
        height: 46px;
        border-radius: 6px;
        border-color: #2A586F;
        margin-left: 20px;
      }
  
  `

  export const IndicatorText = styled.p`
    @font-face {
        font-family: 'poppins';
        src: url(${poppins}) format('opentype');
        }

        font-family: 'poppins', sans-serif;
        font-size: 12.31px;
        font-weight: 400;
  `