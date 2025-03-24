import styled from 'styled-components';
import poppins from '../assets/Poppins-Light.ttf'
import Oceanwide from '../assets/Oceanwide-Semibold.otf'



export const Container = styled.div`
    width: 1474px;
    height: 571px;
`

export const TextContainer =styled.div`
    width: 1474px;
    height: 400px;
    position: absolute;
    top: 34%;    
`

export const TestinnerContainer = styled.div`
    height: 136px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h2` 
  width: 1128px;
  height: 93;
  @font-face {
    font-family: 'Oceanwide';
    src: url(${Oceanwide}) format('opentype');
  }

  font-family: 'Oceanwide', sans-serif;
  font-size: 74px;
  font-weight: 600;
  color: #3e3e3e;
  
  span {
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      bottom: 8px;
      left: 0;
      width: 100%;
      height: 18px;
      background: #FAC167;
      z-index: -1;
    }
  }

`

export const Para = styled.p`
  width: 581px;
  height: 41px;
  @font-face {
  font-family: 'poppins';
  src: url(${poppins}) format('opentype');
  }

  font-family: 'poppins', sans-serif;
  font-size: 28px;
  color: #545454; 
    span{
    font-weight: bold;
  }
`

export const Subcontainer = styled.div`
  width: 1474px;
  height: 150px; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
`;

export const Line = styled.div`
  width: 1110px;
  height: 2px;
  background-color: #D1D1D1;
  position: absolute;
  top: 0;
  left: 12%;
`;

export const CheckboxContainer = styled.div`
  width: 569px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  color: #333;
`;

export const Checkbox = styled.input`
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: absolute;
  left: 220px;
  top: 50px;
`;
export const Label =styled.label`
  width: 569px;
  height: 54px;
  @font-face {
  font-family: 'poppins';
  src: url(${poppins}) format('opentype');
  }

  font-family: 'poppins', sans-serif;
  font-size: 17px;
`

export const Button = styled.button`
  width: 171px;
  height: 43;
  background-color: ${(props)=>(props.disabled ? "#ccc":"#2A586F")};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
`;
