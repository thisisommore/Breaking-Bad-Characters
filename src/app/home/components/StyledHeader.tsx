import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-size: var(--font-md);
  color: var(--color);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  backdrop-filter: blur(14px);

  p {
    margin: 0px;
  }

  .iconify {
    cursor: pointer;
  }
  .disabled {
    cursor: initial;
    color: #8a60ff;
    pointer-events: none;
  }
`;
export default StyledHeader;
