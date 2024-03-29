"use client";
import { useEffect, useState } from "react";
import useHttp from "../../api/http-hook";
import InfoCard from "../../components/InfoCard";
import Spinner from "../../components/Spinner";
import Characters from "../../types/Characters";
import Character from "../../types/Character";

import StyledCharacter from "./components/StyledCharacter";
import StyledCharacters from "./components/StyledCharacters";
import StyledHeader from "./components/StyledHeader";
import { Icon } from "@iconify/react";
import { GetCharsResponse } from "@/api/CharactersAPI";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState<GetCharsResponse>();
  const [nextPageCharacters, setNextPageCharacters] =
    useState<GetCharsResponse>();
  const [pageNo, setPageNo] = useState(0);
  const { loading, error, getCharacters } = useHttp();
  useEffect(() => {
    let isCancelled = false;
    async function fetchCharacters() {
      /* Fetch 20 characters so that we can set state for next page,
         useful for pagination where we can disable next button by looking
         at nextPageCharacters state
      */
      const resCharacters = await getCharacters(pageNo, 20);
      if (!isCancelled) {
        setCharacters(resCharacters.data.slice(0, 10));

        setNextPageCharacters(resCharacters.data.slice(10));
      }
    }
    fetchCharacters();
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCharacters, setCharacters]);

  const viewDetail = (char_id: string) => {
    // TODO
    // Pass as state so that detail component won't need to fetch it again
    router.push("/detail/" + char_id);
  };

  const showNextPage = async () => {
    setCharacters(nextPageCharacters);

    const res = await getCharacters(pageNo + 2);
    setNextPageCharacters(res.data);
    setPageNo(pageNo + 1);
  };

  const showPrevPage = async () => {
    setNextPageCharacters(characters);

    const res = await getCharacters(pageNo - 1);

    setCharacters(res.data);
    setPageNo(pageNo - 1);
  };

  return (
    <>
      <StyledHeader>
        <p>Breaking Bad Characters</p>
        <div>
          <Icon
            onClick={showPrevPage}
            className={pageNo ? "" : "disabled"}
            icon="grommet-icons:next"
            hFlip={true}
          />
          <Icon
            className={nextPageCharacters?.length ? "" : "disabled"}
            onClick={showNextPage}
            icon="grommet-icons:next"
          />
        </div>
      </StyledHeader>
      {error && (
        <InfoCard error={!!error}>{error.message ?? "Error occured"}</InfoCard>
      )}
      {loading && <Spinner></Spinner>}
      <StyledCharacters style={{ marginLeft: 20 }}>
        {characters
          ? characters.map((character) => (
              <StyledCharacter
                onClick={() => viewDetail(character._id)}
                key={character._id}
                character={character}
              ></StyledCharacter>
            ))
          : !error && !loading && <p>No characters present</p>}
      </StyledCharacters>
    </>
  );
};

export default Home;
