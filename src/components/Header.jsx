import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";
export const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./img/logo.jpg" alt="" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 3rem;
    max-width: 40%;
    height: auto;
  }
`;
export default Header;
