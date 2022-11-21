import { Form } from 'formik';
import styled from 'styled-components';
import { Button } from '../../ui/Buttons';

export const FormButton = styled(Button)`
  width: 100%;
  margin-top: auto;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
