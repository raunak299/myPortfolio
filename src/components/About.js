import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { aboutText, aboutImg } from "../data";

function About() {
  return (
    <Wrapper id="about" className="section section-center">
      <div className="about-img-container">
        <img src={aboutImg} className="about-img" alt="about" loading="lazy" />
      </div>
      <div className="about-text-container">
        <h2>About</h2>
        <div className="underline"></div>
        {aboutText.split("\n").map((line) => {
          return <p key={uuidv4()}>{line}</p>;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  transition: var(--transition);
  .about-img {
    display: block;
    max-width: 20rem;
    max-height: 25rem;
    object-fit: cover;
    position: relative;
    border-radius: var(--radius);
    transition: var(--transition);
    margin-bottom: 2rem;
  }
  .underline {
    margin-left: 0;
  }
  .about-text {
    color: var(--clr-grey-1);
  }
  .about-img-container {
    position: relative;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
    .about-img {
      margin-bottom: inherit;
    }
    .about-text-container {
      padding-left: 2rem;
    }
    .about-img-container::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
    }
  }
`;

export default About;
