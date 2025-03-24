import styled from "styled-components";
import Oceanwide from "../assets/Oceanwide-Semibold.otf";
import poppins from "../assets/Poppins-Light.ttf";

export const SignupContainer = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
`;

export const SignupBox = styled.div`
    width: 481px;
    height: 650px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
    text-align: center;
    padding: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Title = styled.h2`
    height: 51px;
    @font-face {
        font-family: "Oceanwide";
        src: url(${Oceanwide}) format("opentype");
    }

    color: #2a586f;
    font-family: "Oceanwide", sans-serif;
    font-weight: 600;
    font-size: 33.94px;
    margin-bottom: 16px;

    span {
        position: relative;
        z-index: 1;

        &::after {
            content: "";
            position: absolute;
            bottom: 2px;
            left: 1px;
            width: 97%;
            height: 5px;
            background: #fac167;
            z-index: -1;
        }
    }
`;
export const InputGroup = styled.div`
    text-align: left;
    margin-bottom: 16px;
`;
export const InputRadioGroup = styled.div`
    margin-right: 64%;
`;

export const RadioSubGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
`;

export const Label = styled.label`
    display: block;
    @font-face {
        font-family: "poppins";
        src: url(${poppins}) format("opentype");
    }

    font-family: "poppins", sans-serif;
    font-size: 20.72px;
    margin-bottom: 8px;
    font-weight: bold;
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    @font-face {
        font-family: "poppins";
        src: url(${poppins}) format("opentype");
    }

    font-family: "poppins", sans-serif;
    font-size: 13.69px;
    margin-bottom: 8px;
    font-weight: bold;
`;

export const InputRadio = styled.input`
    width: 14px;
    height: 14px;
`;

export const InputCommon = styled.input`
    width: 430px;
    height: 52px;
    padding: 0 10px;
    border-radius: 4px;

    ::placeholder {
        color: #bcbcbc;
    }

    @font-face {
        font-family: "poppins";
        src: url(${poppins}) format("opentype");
    }

    font-family: "poppins", sans-serif;
    font-size: 16px;
`;
export const Select = styled.select`
    width: 93px;
    height: 52px;
    padding: 0 10px;

    option {
        padding: 10px;
    }
`;
export const InputSelectBox = styled.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 4px;
`;

export const InputNum = styled.input`
    width: 332px;
    height: 49px;
    padding: 0 10px;
    border-radius: 4px;

    @font-face {
        font-family: "poppins";
        src: url(${poppins}) format("opentype");
    }

    font-family: "poppins", sans-serif;
    font-size: 16px;

    ::placeholder {
        color: #bcbcbc;
    }
`;

export const Button = styled.button`
    width: 454px;
    height: 43px;
    padding: 10px;
    background-color: #2a586f;
    color: #ffffff;
    border: none;
    cursor: pointer;
`;

export const LastContainer = styled.div`
    margin-top: 16px;
    @font-face {
        font-family: "poppins";
        src: url(${poppins}) format("opentype");
    }

    font-family: "poppins", sans-serif;
    font-size: 13px;
    font-weight: 400;
    span {
        color: #006eec;
    }
`

export const ErrorMessage = styled.small`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`