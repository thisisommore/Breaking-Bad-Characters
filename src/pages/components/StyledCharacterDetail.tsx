import styled from "styled-components";
import InfoCard from "../../components/InfoCard";
import Character from "../../types/Character";

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

    .character-image {
      max-width: 90%;
      max-height: 70%;
      object-fit: contain;
    }

    @media only screen and (max-width: 542px) {
      max-width: 100%;
      height: 50%;
      .character-image {
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
  character?: Character;
};
const StyledCharacterDetail = (props: Props) => {
  return (
    <Container>
      {props.character ? (
        <>
          <div className="name-and-image">
            <p className="name">{props.character.name}</p>
            <img
              className="character-image"
              src={props.character.img}
              alt={`${props.character.name}`}
            />
          </div>
          <div className="more-details">
            <p className="birthdate">{props.character.birthday}</p>
            <p className="occupation">{props.character.occupation}</p>
            <p className="status">{props.character.status}</p>
            <p className="nickname">{props.character.nickname}</p>
            <p className="portrayed">{props.character.portrayed}</p>
            <p className="appearance">
              Seasons: {props.character.appearance.join(" ")}
            </p>
          </div>
        </>
      ) : (
        <InfoCard>Character not selected</InfoCard>
      )}
    </Container>
  );
};
export default StyledCharacterDetail;
