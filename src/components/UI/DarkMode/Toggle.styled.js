import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => (theme === "light" ? "#ffeee4" : "#381200")};
  padding: 0.6rem;
  border-radius: 50px;

  border: 0px;

  svg {
    height: auto;
    width: 1.3rem;
    transition: all 0.3s linear;
  }
`;

export default ToggleContainer;
