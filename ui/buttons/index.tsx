import { useState } from "react";
import styled from "styled-components";

const BaseButtonContainer = styled.button`
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.rounded.md};
  border: 0;
  width: fit-content;
  padding: 20px 21.5px;
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
      {...props}
    >
      {props.icon}
      {props.children}
    </BaseButtonContainer>
  );
};

export { IconButton };