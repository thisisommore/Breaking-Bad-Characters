import styled from "styled-components";

const Modal = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(24px);
  transition: 0.3s ease-out;
  transform: ${(props) =>
    props.visible ? "translateY(0%)" : "translateY(100%)"};
  z-index: 4;
`;

export default Modal;
