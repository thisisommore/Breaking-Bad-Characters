import styled from "styled-components";
import Character from "@/types/Character";
import { Quote } from "@/types/Quote";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { GetQuotesReponse } from "@/api/QuotesAPI";
import Image from "next/image";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  .name,
  .quote {
    color: var(--color);
  }
  .name-and-image {
    display: inline;
    height: 100%;
    max-width: 40%;
    .name {
      font-size: var(--font-sm);
      margin: 0;
    }
    .c-character-image {
      position: relative;
      max-width: 96%;
      max-height: 70%;

      .character-image {
        position: static !important;
      }
    }

    @media only screen and (max-width: 542px) {
      max-width: 100%;
      height: 50%;
      .c-character-image {
        max-width: 100%;
        max-height: 90%;
      }
    }
  }

  .more-details {
    width: 60%;
    @media only screen and (max-width: 542px) {
      width: 100%;
    }

    .quote {
      display: block;
      margin-bottom: 8px;
    }
    padding-bottom: 20px;
  }

  .close-modal {
    position: absolute;
    right: 2%;
    top: 2%;
    font-size: var(--font-lg);
  }
`;

type Props = {
  character: Character;
  quotes?: GetQuotesReponse;
  /* Quotes are optional in case data fetch
     fails it will be undefined and error
     message will be shown at place of quotes */
};

const StyledCharacterDetail = ({ character, quotes }: Props) => {
  useEffect(() => {
    const eventListnerCallBack = ({ key }: KeyboardEvent) => {
      if (key === "Escape") routeToHomePage();
    };
    document.addEventListener("keydown", eventListnerCallBack);
    return () => {
      document.removeEventListener("keypress", eventListnerCallBack);
    };
  });
  const router = useRouter();
  const routeToHomePage = () => {
    router.push("/home");
  };
  return (
    <Container>
      {
        <>
          <div className="close-modal" onClick={routeToHomePage}>
            <Icon icon="clarity:window-close-line" />
          </div>
          <div className="name-and-image">
            <p className="name">{character.name}</p>
            <div className="c-character-image">
              <Image
                className="character-image"
                src={character.image_url}
                alt={`${character.name}`}
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="more-details">
            <p className="birthdate">Birth date: {character.birth_date}</p>
            {character.occupation.map((val, i) => (
              <p key={i} className="occupation">
                {val}
              </p>
            ))}

            <p className="status">character.status</p>
            <p className="nickname">Nickname: {character.name}</p>
            <p className="portrayed">Portrayed by: {character.portrayed}</p>
            <p className="appearance">
              Seasons: {character.appearances.join(" ")}
            </p>
            {!quotes ? (
              <Spinner />
            ) : (
              quotes?.map((quote, i) => (
                <q key={i} className="quote">
                  {quote}
                </q>
              ))
            )}
          </div>
        </>
      }
    </Container>
  );
};
export default StyledCharacterDetail;
