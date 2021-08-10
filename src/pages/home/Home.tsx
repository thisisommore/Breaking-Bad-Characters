import { useEffect, useState } from "react";
import useHttp from "../../api/http-hook";
import InfoCard from "../../components/InfoCard";
import Spinner from "../../components/Spinner";
import Characters from "../../types/Characters";
import Character from "../../types/Character";

import StyledCharacter from "./components/StyledCharacter";
import StyledCharacters from "./components/StyledCharacters";
import StyledHeader from "./components/StyledHeader";
import { useHistory } from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState<Characters>();
  const { loading, error, getCharacters } = useHttp();
  const history = useHistory();
  useEffect(() => {
    let isCancelled = false;
    async function fetchCharacters() {
      const response = await getCharacters();

      if (!isCancelled) setCharacters(response.data);
    }
    fetchCharacters();
    return () => {
      isCancelled = true;
    };
  }, [getCharacters, setCharacters]);

  const viewDetail = (character: Character) => {
    // Pass as state so that detail component won't need to fetch it again
    history.push("/detail/" + character.char_id, { character });
  };

  return (
    <>
      <StyledHeader>Breaking Bad Characters</StyledHeader>
      {error && (
        <InfoCard error={!!error}>{error.message ?? "Error occured"}</InfoCard>
      )}
      {loading && <Spinner></Spinner>}
      <StyledCharacters style={{ marginLeft: 20 }}>
        {characters
          ? characters.map((character) => (
              <StyledCharacter
                onClick={() => viewDetail(character)}
                key={character.char_id}
                character={character}
              ></StyledCharacter>
            ))
          : !error && !loading && <p>No characters present</p>}
      </StyledCharacters>
    </>
  );
}

export default Home;
