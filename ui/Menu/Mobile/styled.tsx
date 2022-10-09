import styled from "styled-components";
import { BaseContainer } from "../Desktop/styled";

interface Props {
  open: boolean;
}

export const ContainerMobile = styled(BaseContainer)<Props>`
  display: none;
  justify-content: center;
  text-align: left;
  padding: 40px;
  top: 0;
  left: 0;
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const MenuItem = styled.a`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.g9};
  cursor: pointer;
  transition: color 0.3s linear;
  padding: 30px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;
