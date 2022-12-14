import React from "react";
import styled from "styled-components";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function ProjectCard({ img, title, description, skills, github, live }) {
  const skillsArr = skills.split(",");
  return (
    <Wrapper>
      <img src={img} alt={title} className="project-img" loading="lazy" />
      <div className="project-detail">
        <h5>{title}</h5>
        <div className="underline"></div>
        <p>{description}</p>
        <div className="skills">
          {skillsArr.map((skill) => {
            return (
              <div key={uuidv4()} className="btn">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
      <div className="links">
        {github ? (
          <a
            href={github}
            target="_blank"
            style={{ display: "table-cell" }}
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        ) : (
          <FaGithub className="disabled-icon" />
        )}
        {live ? (
          <a
            href={live}
            target="_blank"
            style={{ display: "table-cell" }}
            rel="noopener noreferrer"
          >
            <FaCodepen className="icon live-icon" />
          </a>
        ) : (
          <FaCodepen className="disabled-icon" />
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  border-radius: 3%;
  overflow: hidden;
  /* background: var(--clr-primary-9); */
  background: var(--clr-white);
  transition: var(--transition);
  .underline{
    height:2px;
    margin-left:0;
    margin-bottom: 0.25rem;
  }
  :hover{
    box-shadow: var(--dark-shadow);
    transform: scale(1.03);
  }
  .skills{
    display:flex;
    /* gap: 0.5rem;  */ //Commented due to support issue
    flex-wrap:wrap;
  }
  .btn{
    font-size: 0.6rem;
    margin-right:0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  .project-detail {
    margin: 0.5rem 1rem;
  }
  .project-img {
    height: 10rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-bottom:1px solid var(--clr-primary-5);
    box-shadow:var(--light-shadow);
  }
  .live-icon{
    animation: spinner 10s linear infinite;
  }
  .links {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  .icon {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .icon:hover{
    /* transform: scale(1.2); */
    color: var(--clr-primary-3);
  }
  .disabled-icon{
    color: var(--clr-grey-8);
    font-size: 1.5rem;
  }
`;

export default ProjectCard;
