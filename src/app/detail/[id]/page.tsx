"use client";
import { useState, useEffect } from "react";
import useHttp from "@/api/http-hook";
import InfoCard from "@/components/InfoCard";
import Modal from "@/components/Modal";
import Chatactor from "@/types/Character";
import StyledCharacterDetail from "./components/StyledCharacterDetail";
import { GetQuotesReponse } from "@/api/QuotesAPI";

import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
const Detail = () => {
  const [character, setCharacter] = useState<Chatactor>();
  const [quotes, setQuotes] = useState<GetQuotesReponse>();
  const { error, loading, getCharacter, getQuote } = useHttp();
  const id = useParams().id as string;

  useEffect(() => {
    //Set data from api since data is not available in state
    const fetchCharacterAndQuotes = async () => {
      const resChar = await getCharacter(id);
      const characterName = resChar.data.name;
      setCharacter(resChar.data);

      const resQuotes = await getQuote(characterName);
      setQuotes(resQuotes.data);
    };
    fetchCharacterAndQuotes();
  }, [getCharacter, getQuote, id, setCharacter, setQuotes]);
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

export default Detail;
