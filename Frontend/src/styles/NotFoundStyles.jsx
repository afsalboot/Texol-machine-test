// Styled Components

import styled from "styled-components";
import poppins from '../assets/Poppins-Light.ttf'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f9fafb;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  p{
    @font-face {
        font-family: 'poppins';
        src: url(${poppins}) format('opentype');
        }
    
        font-family: 'poppins', sans-serif;
        font-size: 45.74px;
        font-weight: 300;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: white;
  background-color: #1e3a8a;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background-color: #3b5998;
  }
`;
