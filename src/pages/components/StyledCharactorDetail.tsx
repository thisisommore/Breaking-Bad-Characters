import styled from "styled-components";
import InfoCard from "../../components/InfoCard";
import Charactor from "../../types/Charactor";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  overflow: scroll;
  .name-and-image {
    display: inline;
    height: 100%;
    max-width: 40%;

    .charactor-image {
      max-width: 90%;
      max-height: 70%;
      object-fit: contain;
    }

    @media only screen and (max-width: 542px) {
      max-width: 100%;
      height: 50%;
      .charactor-image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .more-details {
    width: 60%;
    @media only screen and (max-width: 542px) {
      width: 100%;
    }
  }
`;

type Props = {
  charactor?: Charactor;
};
export const StyledCharactorDetail = (props: Props) => {
  return (
    <Container>
      {props.charactor ? (
        <>
          <div className="name-and-image">
            <p className="name">{props.charactor.name}</p>
            <img
              className="charactor-image"
              src={props.charactor.img}
              alt={`${props.charactor.name}`}
            />
          </div>
          <div className="more-details">
            <p className="birthdate">{props.charactor.birthday}</p>
            <p className="occupation">{props.charactor.occupation}</p>
            <p className="status">{props.charactor.status}</p>
            <p className="nickname">{props.charactor.nickname}</p>
            <p className="portrayed">{props.charactor.portrayed}</p>
            <p className="appearance">
              Seasons: {props.charactor.appearance.join(" ")}
            </p>
          </div>
        </>
      ) : (
        <InfoCard>Charactor not selected</InfoCard>
      )}
    </Container>
  );
};
