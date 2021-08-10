import React, { RefObject, useEffect, useRef, useState } from "react";
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

type Postion = {
  x: number;
  y: number;
};

type Props = {
  charactor: Charactor;
  [key: string]: any;
};
function StyledCharactor(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [postion, setPostion] = useState<Postion>();
  const [style, setStyle] = useState<React.CSSProperties>();
  useEffect(() => {
    setPostion({
      x:
        (ref.current?.offsetLeft === 0
          ? 0
          : ref.current?.offsetLeft ?? 10 - 10) ?? 0,
      y: ref.current?.offsetTop ?? 0,
    });
  }, [setPostion]);

  const expandDiv = () => {
    setStyle({
      position: "absolute",
    });
  };
  return (
    <Container
      {...props}
      ref={ref}
      style={{ top: postion?.y, left: postion?.x, ...style }}
    >
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
