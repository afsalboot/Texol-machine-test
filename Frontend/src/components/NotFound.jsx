import React from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import NotFoundPage from "../assets/404_error.png"; // Ensure this image exists in the correct path
import { Button, Container, Content, Image } from "../styles/NotFoundStyles";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
      <Content>
        <Image src={NotFoundPage} alt="Page Not Found" />
        <p>Sorry, it looks like the page get lost</p>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </Content>
    </Container>
    </>
  );
};

export default NotFound;

