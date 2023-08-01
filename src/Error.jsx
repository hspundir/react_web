import React from "react";
import { Button } from "./styles/Button";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <img src="./img/error.jpg" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
  }
  .btn {
    margin-top: 3rem;
  }
`;
export default Error;
