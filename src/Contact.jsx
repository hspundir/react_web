import React from "react";
import { styled } from "styled-components";

export const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transition: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13792.401274155016!2d78.17151218257014!3d30.20568410918112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925bfe1a82f23%3A0x91c97b4e836384ae!2sPundir%20niwas!5e0!3m2!1sen!2sin!4v1690473767808!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="#" method="post" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
