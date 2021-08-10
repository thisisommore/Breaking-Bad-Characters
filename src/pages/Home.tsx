import { useEffect, useState } from "react";
import useHttp from "../api/http-hook";
import InfoCard from "../components/InfoCard";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import Characters from "../types/Characters";
import Character from "../types/Character";
import StyledCharacter from "./components/StyledCharacter";
import StyledCharacters from "./components/StyledCharacters";
import StyledHeader from "./components/StyledHeader";
import StyledCharacterDetail from "./components/StyledCharacterDetail";

function Home() {
  const [characters, setCharacters] = useState<Characters>();
  const { loading, error, getCharacters } = useHttp();
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  useEffect(() => {
    async function fetchCharacters() {
      const response = await getCharacters();
      setCharacters(response.data);
    }
    fetchCharacters();
  }, [getCharacters, setCharacters]);

  const viewDetail = (character: Character) => {
    setCurrentCharacter(character);
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
      <Modal visible={!!currentCharacter}>
        <StyledCharacterDetail
          character={currentCharacter}
        ></StyledCharacterDetail>
      </Modal>
    </>
  );
}

export default Home;
