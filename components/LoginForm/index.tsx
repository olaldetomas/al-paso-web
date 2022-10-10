import { Formik } from 'formik';
import { Button } from '../../ui/Buttons';
import { Input } from '../../ui/Fields';
import { SubtitleForm, SubtitleFormBold, TitleForm } from '../../ui/Text';
import { ButtonStyled, FormStyled, SubtitleContainer } from './styled';
import { initialFormValues } from './types';
import { validationSchema } from './validationSchema';

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormStyled>
        <TitleForm>Inicio</TitleForm>
        <Input
          placeholder={'usuario@gmail.com'}
          label={'Email'}
          id="email"
          name="email"
        />
        <ButtonStyled>
          <Button type="submit" title={'Aceptar'} />
        </ButtonStyled>
        <SubtitleContainer>
          <SubtitleForm>
            Al aceptar se enviara un
            <SubtitleFormBold> nuevo codigo</SubtitleFormBold> de ingreso al
            email
          </SubtitleForm>
        </SubtitleContainer>
      </FormStyled>
    </Formik>
  );
};

export { LoginForm };
