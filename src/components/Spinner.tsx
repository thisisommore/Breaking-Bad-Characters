import styled from "styled-components";

export default styled.div`
  align-self: center;
  margin-left: 30px;
  margin-top: 10px;
  border: 4px solid white;
  border-top: 4px solid #2b009e;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
