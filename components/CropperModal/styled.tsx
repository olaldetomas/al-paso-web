import { XMarkIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';

export const CancelIconContainer = styled.div`
  width: 100%;
`;

export const ImgPreviewContainer = styled.div`
  display: flex;
  width: fit-content;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.rounded.sm};
  border: solid 1px ${({ theme }) => theme.colors.g4};
`;

export const ThumbContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const ImgPreview = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export const ExitModal = styled(XMarkIcon)`
  cursor: pointer;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.g7};
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  width: inherit;
  max-width: 500px;
  margin: 20px;
  margin: 10px;
  gap: 15px;
`;

export const CropperContainer = styled.div`
  position: relative;
  min-height: 500px;
  width: 100%;
  border-radius: ${({ theme }) => theme.rounded.sm};
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

export const CancelIcon = styled(XCircleIcon)`
  position: relative;
  right: 15px;
  top: -15px;
  width: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.g7};
`;
