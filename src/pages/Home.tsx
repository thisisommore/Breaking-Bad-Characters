import { useEffect, useState } from "react";
import useHttp from "../api/http-hook";
import InfoCard from "../components/InfoCard";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import Charactors from "../types/Charactors";
import Charactor from "../types/Charactor";
import StyledCharactor from "./components/StyledCharactor";
import StyledCharactors from "./components/StyledCharactors";
import StyledHeader from "./components/StyledHeader";
import { StyledCharactorDetail } from "./components/StyledCharactorDetail";

function Home() {
  const [charactors, setCharactors] = useState<Charactors>();
  const { loading, error, getCharactors } = useHttp();
  const [currentCharactor, setCurrentCharactor] = useState<Charactor>();
  useEffect(() => {
    async function fetchCharactors() {
      const response = await getCharactors();
      setCharactors(response.data);
    }
    fetchCharactors();
  }, [getCharactors, setCharactors]);

  const viewDetail = (charactor: Charactor) => {
    setCurrentCharactor(charactor);
  };

  return (
    <>
      <StyledHeader>Breaking Bad Charactors</StyledHeader>
      {error && (
        <InfoCard error={!!error}>{error.message ?? "Error occured"}</InfoCard>
      )}
      {loading && <Spinner></Spinner>}
      <StyledCharactors style={{ marginLeft: 20 }}>
        {charactors
          ? charactors.map((charactor) => (
              <StyledCharactor
                onClick={() => viewDetail(charactor)}
                key={charactor.char_id}
                charactor={charactor}
              ></StyledCharactor>
            ))
          : !error && !loading && <p>No charactors present</p>}
      </StyledCharactors>
      <Modal visible={!!currentCharactor}>
        <StyledCharactorDetail
          charactor={currentCharactor}
        ></StyledCharactorDetail>
      </Modal>
    </>
  );
}

export default Home;
