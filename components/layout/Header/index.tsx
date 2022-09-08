import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 90px;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

export const ButtonGoBack = styled.button`
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
  :hover {
    opacity: 0.7;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.g7};
  font-size: 18px;
  font-weight: 400;
  margin-left: 15px;
`;
