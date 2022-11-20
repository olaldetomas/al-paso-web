import { useEffect, useState } from 'react';
import 'cropperjs/dist/cropper.css';
import type Cropper from 'cropperjs';
import ReactCropper from 'react-cropper';

import { getFileInfo } from '../../utils/get-file-info';
import { Button } from '../../ui/Buttons';
import { ExitModal, Modal, ModalBody, CropperContainer } from './styled';

type Props = {
  file: any;
  onConfirm(croppedFile): void;
  onCompleted(): void;
};

const CropperModal = (props: Props) => {
  const { file } = props;
  const [cropper, setCropper] = useState<Cropper>(null);
  const [image, setImage] = useState<string>(null);

  useEffect(() => {
    if (file !== null) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImage(reader.result as any);
        cropper;
      });
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setCropper(null);
    }
  }, [props, file, cropper]);

  const onConfirm = (): void => {
    if (!cropper) {
      return;
    }
    const croppedCanvas: Object = {
      minWidth: 600,
      maxWidth: 600,
      imageSmoothingQuality: '',
    };

    const canvasData = cropper.getCroppedCanvas(croppedCanvas);
    const fileInfo = getFileInfo(
      file as {
        name: string;
        type: string;
      }
    );
    const dataUrl = canvasData.toDataURL();
    canvasData.toBlob(blob => {
      const croppedFile = new File([blob], fileInfo.filename, {
        type: blob.type,
      });
      props.onConfirm({ croppedFile, dataUrl });
      props.onCompleted();
      setImage(null);
      setCropper(null);
    }, fileInfo.mime);
  };

  const handleClose = (): void => {
    setCropper(null);
    setImage(null);
    typeof props.onCompleted === 'function' && props.onCompleted();
  };

  return (
    <>
      {file && image && (
        <Modal>
          <ModalBody>
            <ExitModal height={35} onClick={handleClose} />

            <CropperContainer>
              {image && (
                <ReactCropper
                  src={image}
                  style={{ height: 500, width: '100%', display: 'flex' }}
                  initialAspectRatio={1}
                  aspectRatio={1}
                  viewMode={1}
                  dragMode="move"
                  cropBoxResizable={true}
                  cropBoxMovable={false}
                  center={true}
                  responsive={true}
                  checkOrientation={true}
                  onInitialized={instance => setCropper(instance)}
                  minCropBoxWidth={854}
                  minCropBoxHeight={480}
                />
              )}
            </CropperContainer>

            <Button title={'Aceptar'} onClick={onConfirm} />
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

export { CropperModal };
