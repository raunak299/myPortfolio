import React from "react";
import styled from "styled-components";
import { Socials } from "./";

function Footer() {
  return (
    <Wrapper>
      <Socials />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid var(--clr-text-1);
  padding: 1rem 0;
  background: var(--clr-grey-9);
  .footer-title {
    color: var(--clr-text-1);
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .footer-icon {
    font-size: 1.5rem;
    color: white;
    transition: var(--transition);
  }
  .footer-icon:hover {
    color: var(--clr-primary-5);
  }
`;

export default Footer;
