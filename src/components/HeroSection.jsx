import React from "react";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

export const HeroSection = () => {
  const { name, image } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is me</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {name} and my age 30. A full stack developer, youtber and
            freelancer. A full stack developer, youtber and freelancer.
          </p>
          <Button className="btn hire-btn">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="Hero" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .btn {
    max-width: 16rem;
  }
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => {
      theme.colors.helper;
    }};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
`;
export default HeroSection;
