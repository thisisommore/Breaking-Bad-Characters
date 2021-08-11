import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding-top: 10px;
  backdrop-filter: blur(24px);
  z-index: 4;
  overflow-y: auto;
`;

export default Modal;
