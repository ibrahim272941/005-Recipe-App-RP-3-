import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <LoginContainer>
        <FormContainer>
          <StyledImg src={mealSvg} />
          <Header>{"Clarusway"} REcipe</Header>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="username" required />
            <StyledInput type="password" placeholder="password" required />
            <StyledButton>Login</StyledButton>
          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </div>
  );
};

export default Login;
