import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 3.8rem;
      li {
        list-style: none;
      }
      .navlink {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
          font-weight: 400;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          position: absolute;
          top: 2%;
          right: 10%;
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      //hide the orignal navbarlist
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transform: translateX(100%);
        display: none;
        opacity: 0;
        z-index: 9;
        .navlink {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 3.2rem;

        color: ${({ theme }) => theme.colors.black};
      }
      .active .close-outline {
        display: inline-block;
        z-index: 999;
      }
      .active .navbar-list {
        display: flex;
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;
  return (
    <Nav>
      <div className={openMenu == true ? "active menuIcon" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navlink"
              to="/"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/about"
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/services"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navlink"
              to="/contact"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
