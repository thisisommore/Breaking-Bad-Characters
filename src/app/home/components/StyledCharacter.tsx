"use client";
import React from "react";
import styled from "styled-components";
import { GetCharsResponseEle } from "@/api/CharactersAPI";
const Container = styled.div`
  background-color: #f7f7f7;
  border-radius: 11px;
  box-shadow: 0 0 4px #b5b5b5;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .name {
    font-size: var(--font-md);
    color: var(--color);
    margin: 0;
  }
  .occupations {
    p {
      margin: 0;
    }
  }

  .birthdate {
    color: #5a4500;
    font-weight: bold;
  }
`;

type Props = {
  character: GetCharsResponseEle;
  [key: string]: any;
};
function StyledCharacter(props: Props) {
  return (
    <Container {...props}>
      <p className="name">{props.character.name}</p>
      <div className="occupations">
        {props.character.occupation.map((ele, i) => (
          <p key={i}>{ele}</p>
        ))}
      </div>
      <div className="birthdate">
        <p>{props.character.birth_date}</p>
      </div>
    </Container>
  );
}

export default StyledCharacter;
