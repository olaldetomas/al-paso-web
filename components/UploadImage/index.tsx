import { useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  ImgPreview,
  DropZoneImgContainer,
  Text,
  Icon,
  CancelIcon,
  FileName,
  ImgPreviewContainer,
  ThumbContainer,
  ThumbsContainer,
} from './styled';

const UploadImage = () => {
  const formikProps = useFormikContext();

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      const reader = new FileReader();
      reader.onload = (e: Event) => {
        const target = e.target as any;
        formikProps.setFieldValue('image', target.result);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
  });

  const deleteFile = deletedfile => {
    const newList = files.filter(file => file.name !== deletedfile.name);
    setFiles(newList);
  };

  const Thumbs = files.map(file => (
    <ThumbContainer key={file.name}>
      <ImgPreviewContainer>
        <ImgPreview
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </ImgPreviewContainer>
      <CancelIcon onClick={() => deleteFile(file)} height={25} />
    </ThumbContainer>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <DropZoneImgContainer {...getRootProps()}>
        <Icon height={30} />
        <Text>Imagen de tu producto (2MB max)</Text>
        <input {...getInputProps()} name={'image'} />
      </DropZoneImgContainer>
      <ThumbsContainer>{Thumbs.length > 0 && <>{Thumbs}</>}</ThumbsContainer>
    </>
  );
};

export { UploadImage };
