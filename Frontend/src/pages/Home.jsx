import React, { useState } from "react";
import Header from "../components/Header";

import {
  Button,
  Checkbox,
  CheckboxContainer,
  Container,
  Label,
  Line,
  Para,
  Subcontainer,
  TestinnerContainer,
  TextContainer,
  Title,
} from "../styles/HomeStyles";
import { Link } from "react-router";

function Home() {

  const [isChecked,setIsChecked] = useState(false)

  function checked (event){
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <Header profile/>
      <Container>
        <TextContainer>
          <TestinnerContainer>
            <Title>
              Welcome to <span>TSEEP Mastery Box</span>{" "}
            </Title>
            <Para>
              Unlock your potential with<span> AI inspired tool</span>
            </Para>
          </TestinnerContainer>
        </TextContainer>

        <Subcontainer>
          <Line />
          <CheckboxContainer>
            <Checkbox type="checkbox" 
            checked={isChecked}
            onChange={checked}
            />
            <Label>I confirm that I have read and accept the terms and conditions and privacy policy.</Label>
          </CheckboxContainer>
          <Link to={'/login'}><Button disabled={!isChecked}>Get Started</Button></Link>
        </Subcontainer>
      </Container>
    </>
  );
}

export default Home;
