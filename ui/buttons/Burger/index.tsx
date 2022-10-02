import { BurgerButtonStyled } from "./styled";

export const BurgerButton = props => {
  return (
    <BurgerButtonStyled open={props.openMobileMenu} {...props}>
      <div />
      <div />
      <div />
    </BurgerButtonStyled>
  );
};
