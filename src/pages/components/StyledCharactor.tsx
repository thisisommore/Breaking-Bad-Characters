import React from "react";
import styled from "styled-components";
import Charactor from "../../types/Charactor";
const Container = styled.div`
  background-color: #f7f7f7;
  border-radius: 11px;
  box-shadow: 0 0 4px #b5b5b5;
  margin: 10px;
  padding: 10px;
  display: inline-block;

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
  charactor: Charactor;
  [key: string]: any;
};
function StyledCharactor(props: Props) {
  return (
    <Container {...props}>
      <p className="name">{props.charactor.name}</p>
      <div className="occupations">
        {props.charactor.occupation.map((ele, i) => (
          <p key={i}>{ele}</p>
        ))}
      </div>
      <div className="birthdate">
        <p>{props.charactor.birthday}</p>
      </div>
    </Container>
  );
}

export default StyledCharactor;
