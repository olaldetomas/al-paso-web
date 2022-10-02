import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 90px;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.g7};
  font-size: 18px;
  font-weight: 400;
  margin-left: 25px;
`;
