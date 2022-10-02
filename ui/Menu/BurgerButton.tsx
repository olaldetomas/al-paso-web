import { StyledBurger } from "./styled";

export const BurgerButton = props => {
  return (
    <StyledBurger open={props.openMobileMenu} {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
