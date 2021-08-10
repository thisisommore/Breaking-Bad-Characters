import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 8vh;
  backdrop-filter: blur(24px);
  z-index: 4;
  overflow-y: auto;
`;

export default Modal;
