import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/Logo.png';
const Login = () => {
  const {loginWithRedirect} =useAuth0();
  return <Wrapper>
    <div className="container">
    <img src={loginImg} alt="user"/>
    <h1>GitHub User</h1>
    <button className="btn" onClick={loginWithRedirect}>Login / Sign Up</button>
    </div> 
  </Wrapper>;
  };
const Wrapper = styled.section`
  min-height: 70vh;
  display: grid;
  place-items: center;
  .container {
    width: 70vw;
    max-width: 600px;
    text-align: center;
    background-color: --clr-grey-5;
  }
  img {
    margin-bottom: 1rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;
export default Login;
