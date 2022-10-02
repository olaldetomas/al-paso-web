import styled from "styled-components";

export const ContainerDesktop = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.menu};
  width: 300px;
  min-width: 300px;
  height: 100vh;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 240px;
  padding-left: 20px;
  border-radius: ${({ theme }) => theme.rounded.md};
`;

export const MenuItemContainer = styled(ItemContainer)`
  cursor: pointer;
  margin-top: 15px;
  :hover {
    background-color: ${({ theme }) => theme.colors.g1};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.g7};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.g9};
`;

export const ItemIcon = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.g9};
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
`;

export const LogOutIconContainer = styled(ItemContainer)`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const LogOutIcon = styled.a`
  border-radius: ${({ theme }) => theme.rounded.md};
  display: flex;
  align-items: center;
  height: 100%;
  width: 40px;
  margin-top: auto;
  cursor: pointer;
`;

// Mobile

export const ContainerMobile = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  min-width: 300px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background.menu};
  top: 0;
  left: 0;
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
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

export const StyledBurger = styled.button`
  top: 2.5%;
  left: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: auto;

  @media (max-width: 1024px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.g6};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
