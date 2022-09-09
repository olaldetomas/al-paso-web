import styled from "styled-components";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const StyledIconButton = styled.button.attrs({
  as: "button",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme }) => theme.colors.g3};
  color: ${({ theme }) => theme.colors.g6};
  border: 0;
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
    <StyledIconButton
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
      className={press ? "press" : ""}
      {...props}
    >
      {props.icon}
      {props.children}
    </StyledIconButton>
  );
};

const StyledAddButton = styled(StyledIconButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.g9};
`;

const AddButton = props => {
  const [press, setPress] = useState(false);

  const handleMouseEvent = event => {
    event.preventDefault();
    setPress(!press);
  };

  return (
    <StyledAddButton
      {...props}
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
      className={press ? "press" : ""}
    >
      <PlusIcon width={20} />
      {props.children}
    </StyledAddButton>
  );
};

export { IconButton, AddButton };
