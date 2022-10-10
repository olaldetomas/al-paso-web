import * as Yup from 'yup';
import { FormFields } from './types';

export const validationSchema = Yup.object({
  [FormFields.email]: Yup.string()
    .email('Email invalido')
    .required('Requerido'),
});
