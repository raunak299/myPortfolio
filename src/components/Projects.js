import React from "react";
import styled from "styled-components";
import { ProjectCard } from "./";
import { v4 as uuidv4 } from "uuid";
import { projects } from "../data";

function Projects() {
  return (
    <BackgroundWrapper>
      <div className="section section-center">
        <h2 className="text-center heading">Projects</h2>
        <div className="underline"></div>
        <Wrapper>
          {projects.map((project, index) => {
            return <ProjectCard key={uuidv4()} {...project} />;
          })}
        </Wrapper>
      </div>
    </BackgroundWrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

const BackgroundWrapper = styled.div`
  background: var(--clr-grey-10);
`;
export default Projects;
