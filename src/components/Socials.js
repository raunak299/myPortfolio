import React from "react";
import { userGithub, userTwitter, userLinkedIn } from "../data";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

function Socials() {
  return (
    <Wrapper>
      {userGithub && (
        <a href={userGithub} className="social-icon">
          <FaGithub />
        </a>
      )}
      {userLinkedIn && (
        <a href={userLinkedIn} className="social-icon">
          <FaLinkedinIn />
        </a>
      )}
      {userTwitter && (
        <a href={userTwitter} className="social-icon">
          <FaTwitter />
        </a>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  .social-icon {
    font-size: 1.5rem;
    color: var(--clr-primary-3);
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--clr-primary-4);
  }
`;
export default Socials;
