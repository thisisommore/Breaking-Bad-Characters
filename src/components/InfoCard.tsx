import styled from "styled-components";

const InfoCard = styled.div<{ error?: boolean }>`
  background-color: ${(props) => (props.error ? "red" : "#a7a7a7")};
  padding: 10px;
  border-radius: 10px;
  color: white;
  margin: 30px;
  width: fit-content;
  &.large {
    margin: 40px;
    font-size: var(--font-sm);
  }
`;
export default InfoCard;
