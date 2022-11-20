import { PhotoIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const ThumbsContainer = styled.div`
  display: flex;
`;

export const ImgPreviewContainer = styled.div`
  display: flex;
  width: fit-content;
  padding: 5px;
  border-radius: ${({ theme }) => theme.rounded.sm};
  border: solid 1px ${({ theme }) => theme.colors.g4};
`;

export const ThumbContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const ImgPreview = styled.img`
  border-radius: 5px;
  width: 50px;
  height: 50px;
`;

export const FileName = styled.h5`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: ${({ theme }) => theme.colors.g7};
`;

export const CancelIcon = styled(XCircleIcon)`
  position: relative;
  right: 15px;
  top: -15px;
  width: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.g7};
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
  margin: 10px 0px 20px 0px;
  padding: 10px;
  :hover {
    background-color: ${({ theme }) => theme.colors.uploadImage.background};
    border-color: ${({ theme }) => theme.colors.uploadImage.border};
  }
`;

export const Text = styled.h4`
  font-weight: 300;
  font-size: 14px;
  margin: 0;
  color: ${({ theme }) => theme.colors.g5};
`;

export const Icon = styled(PhotoIcon)`
  color: ${({ theme }) => theme.colors.g5};
`;
