import React from "react";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Harendar Singh</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              beatae
            </p>
          </div>
          <div className="footer-sucscribe">
            <h3>Subscibe to get important update</h3>
            <form action="">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="#" target="_blank">
                  <FaDiscord className="icons" />
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call us</h3>
            <h3>+91 243234324234 </h3>
          </div>
        </div>
        {/*         bottom footer
         */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Harendar. All Right Reseved</p>
            <div>
              <p>PRIVACT POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
    }
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .grid div:last-child {
        justify-self: start;
        align-self: center;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;
