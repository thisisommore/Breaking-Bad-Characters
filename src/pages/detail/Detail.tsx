import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useHttp from "../../api/http-hook";
import InfoCard from "../../components/InfoCard";
import Modal from "../../components/Modal";
import Spinner from "../../components/Spinner";
import Chatactor from "../../types/Character";
import { Quote } from "../../types/Quote";
import StyledCharacterDetail from "./components/StyledCharacterDetail";

export const Detail = () => {
  const [character, setCharacter] = useState<Chatactor>();
  const [quotes, setQuotes] = useState<Quote[]>();
  const { error, loading, getCharacter, getQuote } = useHttp();
  const { id } = useParams<{ id: string }>();
  const { location } = useHistory<{ character: Chatactor }>();

  useEffect(() => {
    let characterName: string;

    if (location.state?.character) {
      //Set data from state instead of fetching from api
      characterName = location.state.character.name;
      setCharacter(location.state.character);
    } else {
      //Set data from api since data is not available in state
      const fetchCharacter = async () => {
        const res = await getCharacter(id);
        characterName = res.data[0].name;
        setCharacter(res.data[0]);
      };
      fetchCharacter();
    }

    const fetchQuotes = async () => {
      const res = await getQuote(characterName);
      setQuotes(res.data);
    };

    fetchQuotes();
  }, [getCharacter, getQuote, id, location.state, setCharacter, setQuotes]);
  return (
    <Modal>
      {loading && !character && <Spinner />}
      {character && (
        <StyledCharacterDetail
          character={character}
          quotes={quotes}
        ></StyledCharacterDetail>
      )}
      {error && (
        <InfoCard error>
          {error?.message
            ? error.message
            : "Error occured please try again later"}
        </InfoCard>
      )}
    </Modal>
  );
};
