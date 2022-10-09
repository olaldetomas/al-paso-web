import styled from "styled-components";

interface Props {
  secondary?: boolean;
}

export const BaseButtonContainer = styled.button<Props>`
  justify-content: center;
  justify-items: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  width: fit-content;
  padding: 15px 17px;
  cursor: pointer;

  &.press {
    opacity: 0.7;
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.g3};
  }
`;

export const ButtonTitle = styled.h3<Props>`
  font-weight: 400;
  font-size: 16px;
  padding: 2px 20px;
  margin: 0;
  color: ${({ theme }) => theme.colors.g9};
  background-color: ${({ theme }) => theme.colors.primary};

  &.secondary {
    background-color: ${({ theme }) => theme.colors.g3};
    color: ${({ theme }) => theme.colors.g8};
  }

  &.press {
    opacity: 0.7;
  }
`;
