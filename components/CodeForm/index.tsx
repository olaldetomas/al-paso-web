import { Formik } from 'formik';
import { Button } from '../../ui/Buttons';
import { Input } from '../../ui/Fields';
import { SubtitleForm, SubtitleFormBold, TitleForm } from '../../ui/Text';
import { ButtonStyled, FormStyled, SubtitleContainer } from './styled';
import { initialFormValues } from './types';
import { validationSchema } from './validationSchema';

const CodeForm = ({ emailMessage, onSubmit }) => {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormStyled>
        <TitleForm>Ingresar codigo</TitleForm>
        <Input
          placeholder={'######'}
          label={'Codigo'}
          id="code"
          type="password"
          name="code"
        />
        <ButtonStyled>
          <Button type="submit" title={'Aceptar'} />
        </ButtonStyled>
        <SubtitleContainer>
          <SubtitleForm>
            Ingrese el codigo que le enviamos a{' '}
            <SubtitleFormBold>{emailMessage}</SubtitleFormBold>
          </SubtitleForm>
        </SubtitleContainer>
      </FormStyled>
    </Formik>
  );
};

export { CodeForm };
