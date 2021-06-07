import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    box-shadow: -2px -2px 5px 1px rgba(255, 255, 255, 0.75),
      2px 2px 5px 1px rgba(255, 255, 255, 0.75);
    color: ${(props) => props.theme.colors.white};
  }
`;

export { Button };
