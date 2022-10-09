import { ButtonHTMLAttributes, ReactElement, useState } from "react";
import { BaseButtonContainer, ButtonTitle } from "./styled";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

interface IconButtonProps extends ButtonProps {
  icon?: ReactElement;
}

const Button = (props: ButtonProps) => {
  const [press, setPress] = useState(false);
  const handleMouseEvent = event => {
    event.preventDefault();
    setPress(!press);
  };

  const btnClass = cn("", {
    press: press,
    secondary: props.secondary,
  });

  return (
    <BaseButtonContainer
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
      className={btnClass}
      {...props}
    >
      <ButtonTitle className={btnClass}>{props.title}</ButtonTitle>
    </BaseButtonContainer>
  );
};

const IconButton = (props: IconButtonProps) => {
  const [press, setPress] = useState(false);
  const handleMouseEvent = event => {
    event.preventDefault();
    setPress(!press);
  };

  const btnClass = cn("", {
    press: press,
    secondary: props.secondary,
  });

  return (
    <BaseButtonContainer
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
      className={btnClass}
      {...props}
    >
      {props.icon}
    </BaseButtonContainer>
  );
};

export { Button, IconButton };
