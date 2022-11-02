import styled from 'styled-components';

export const BaseContainer = styled.nav`
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-width: 300px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background.menu};
`;

export const ContainerDesktop = styled(BaseContainer)`
  display: flex;
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
