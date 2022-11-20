import { useRef, useState } from 'react';
import { CropperModal } from '.';
import {
  DropZoneImgContainer,
  Icon,
  ImgPreview,
  ImgPreviewContainer,
  Text,
} from './styled';

const ImageInput = () => {
  const [file, setFile] = useState<Object>(null);
  const [resizedImage, setResizedImage] = useState<string>(null);
  const [viewImages, setViewImages] = useState<{ src: string; alt: string }[]>(
    []
  );
  const inputRef = useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();

  const onFileInputChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
    e.target.value = null;
  };

  return (
    <>
      <DropZoneImgContainer onClick={triggerFileSelectPopup}>
        <Icon height={30} />
        <Text>Imagen de tu producto (2MB max)</Text>
        <input
          type="file"
          accept="image/jpeg,image/png"
          ref={inputRef}
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />
      </DropZoneImgContainer>

      {resizedImage && (
        <ImgPreviewContainer>
          <ImgPreview src={resizedImage} />
        </ImgPreviewContainer>
      )}

      <CropperModal
        file={file}
        onConfirm={({ croppedFile, dataUrl }) => {
          console.log(croppedFile);
          console.log(dataUrl);
          setResizedImage(window.URL.createObjectURL(croppedFile as any));
        }}
        onCompleted={() => setFile(null)}
      />
    </>
  );
};

export { ImageInput };
