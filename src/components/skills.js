import Title from "../components/title";
import Progressbar from "../components/progressbar";
import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/layouts";
function Skills() {
  return (
    <SkilssStyled>
      <Title title="Skills" span={"Skills"} />
      <InnerLayout>
        <div className="skills">
          <Progressbar title={"JavaScript, TypeScript, ES6+"} width={"95%"} text={"95%"} />
          <Progressbar title={"React, JSX, Hooks"} width={"90%"} text={"90%"} />
          <Progressbar title={"HTML5, CSS3, Sass, Styled-Components"} width={"95%"} text={"95%"} />
          <Progressbar title={"Node.js, Express, REST APIs"} width={"85%"} text={"85%"} />
          <Progressbar title={"C#, .NET, ASP.NET"} width={"80%"} text={"80%"} />
          <Progressbar title={"Azure, Docker, AWS"} width={"75%"} text={"75%"} />
          <Progressbar title={"SQL, NoSQL, GraphQL"} width={"80%"} text={"80%"} />
          <Progressbar title={"Git, Agile, Problem Solving"} width={"95%"} text={"95%"} />
        </div>
      </InnerLayout>
    </SkilssStyled>
  );
}
const SkilssStyled = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
  @media screen and (max-width: 950px) {
    .skills {
      grid-template-columns: 1fr;
      grid-row-gap: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;
export default Skills;
