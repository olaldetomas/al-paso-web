import { useState } from "react";
import styled from "styled-components";

interface Props {
  primary: boolean;
}

const BaseButtonContainer = styled.button<Props>`
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.g3};
  border: 0;
  width: fit-content;
  padding: 15px 16.5px;
  cursor: pointer;
  &.press {
    opacity: 0.7;
  }
`;

const IconButton = props => {
  const [press, setPress] = useState(false);
  const handleMouseEvent = event => {
    event.preventDefault();
    setPress(!press);
  };
  return (
    <BaseButtonContainer
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
      className={press ? "press" : ""}
      primary={props.primary}
      {...props}
    >
      {props.icon}
      {props.children}
    </BaseButtonContainer>
  );
};

export { IconButton };
