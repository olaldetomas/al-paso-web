import { PhotoIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const ThumbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: ${({ theme }) => theme.rounded.sm};
  border: solid 1px ${({ theme }) => theme.colors.g4};
  margin-bottom: 25px;
`;

export const Icon = styled(PhotoIcon)`
  color: ${({ theme }) => theme.colors.g5};
`;

export const CancelIcon = styled(XMarkIcon)`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.g6};
`;

export const FileName = styled.h5`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: ${({ theme }) => theme.colors.g7};
`;

export const Text = styled.h4`
  font-weight: 300;
  font-size: 14px;
  padding: 2px 20px;
  margin: 0;
  color: ${({ theme }) => theme.colors.g5};
`;

export const DropZoneImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: dashed 2px ${({ theme }) => theme.colors.g5};
  border-radius: ${({ theme }) => theme.rounded.sm};
  cursor: pointer;
  margin-bottom: 30px;
  padding: 10px;
  :hover {
    background-color: ${({ theme }) => theme.colors.uploadImage.background};
    border-color: ${({ theme }) => theme.colors.uploadImage.border};
  }
`;

export const ImgPreview = styled.img`
  display: block;
  border-radius: ${({ theme }) => theme.rounded.sm};
  width: 50px;
  height: 50px;
`;
