import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.g7};
  font-size: 18px;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.g7};
  font-weight: 400;
`;

export const SubtitleForm = styled.h5`
  color: ${({ theme }) => theme.colors.g5};
  font-weight: 300;
`;

export const TitleForm = styled(Title)`
  margin: 0px 0px 15px;
  font-size: 20px;
`;

export const SubtitleFormBold = styled(SubtitleForm).attrs({ as: 'a' })`
  color: ${({ theme }) => theme.colors.g8};
  font-weight: 500;
`;
