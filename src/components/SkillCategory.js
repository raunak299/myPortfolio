import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function SkillCategory({ category, skills }) {
  const skillsArr = skills.split(",");
  return (
    <Wrapper>
      <div className="category-text">
        <h4>{category.toUpperCase()}</h4>
      </div>
      <div className="skill-container">
        {skillsArr.map((skill) => (
          <div className="btn" key={uuidv4()}>
            {skill}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: var(--dark-shadow);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  .category-text {
    background: var(--clr-primary-6);
    height: 5rem;
    display: grid;
    place-items: center;
    color: var(--clr-text-1);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .skill-container {
    padding: 1rem 2rem;
    display: flex;
    height: 100%;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    /* background: var(--clr-text-5); */
    /* gap: 1rem; */ //commented due to support issue
  }

  .btn {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export default SkillCategory;
