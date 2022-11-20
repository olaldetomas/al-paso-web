import { Form, Formik } from 'formik';
import { saveProduct } from '../../lib/api';
import { Button } from '../../ui/Buttons';
import { Input, PrefixInput, Select, TextArea } from '../../ui/Fields';
import { ImageInput } from '../CropperModal/ImageInput';
import { ButtonStyled } from './styled';
import { initialFormValues } from './types';
import { validationSchema } from './validationSchema';

const categories = [
  { value: '', label: 'Seleccione categoria' },
  { value: '1', label: 'Bebidas' },
  { value: '2', label: 'Comidas' },
  { value: '3', label: 'Vegi' },
];

const AddProductForm = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        await saveProduct(values);
        resetForm();
      }}
    >
      <Form>
        <Input
          placeholder={'Flat white'}
          label={'Nombre'}
          id="name"
          name="name"
        />
        <PrefixInput
          prefixText={'$'}
          placeholder={'0.00'}
          label={'Precio'}
          id="price"
          name="price"
        />
        <Select label={'Categoria'} name="category" options={categories} />
        <TextArea
          label={'Descripcion'}
          placeholder={'Descripcion del producto'}
          name="description"
        />

        <ImageInput />

        <ButtonStyled>
          <Button type="submit" title={'Aceptar'} />
        </ButtonStyled>
      </Form>
    </Formik>
  );
};

export { AddProductForm };
