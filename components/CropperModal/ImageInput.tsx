import { useFormikContext } from 'formik';
import { useRef, useState } from 'react';
import { CropperModal } from './CropperModal';
import {
  ChooseFileContainer,
  Icon,
  ImgPreview,
  ImgPreviewContainer,
  Text,
} from './styled';

const ImageInput = () => {
  const formikProps = useFormikContext();
  const [file, setFile] = useState<Object>(null);
  const [resizedImage, setResizedImage] = useState<string>(null);
  const inputRef = useRef<HTMLInputElement>();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const onFileInputChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
    e.target.value = null;
  };

  return (
    <>
      {resizedImage ? (
        <ImgPreviewContainer>
          <ImgPreview src={resizedImage} />
        </ImgPreviewContainer>
      ) : (
        <ChooseFileContainer onClick={triggerFileSelectPopup}>
          <Icon height={30} />
          <Text>Imagen de tu producto</Text>
          <input
            type="file"
            accept="image/jpeg,image/png"
            ref={inputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />
        </ChooseFileContainer>
      )}

      <CropperModal
        file={file}
        onConfirm={imageDataURL => {
          formikProps.setFieldValue('image', imageDataURL);
          setResizedImage(imageDataURL);
        }}
        onCompleted={() => setFile(null)}
      />
    </>
  );
};

export { ImageInput };
