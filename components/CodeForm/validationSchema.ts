import * as Yup from 'yup';
import { FormFields } from './types';

export const validationSchema = Yup.object({
  [FormFields.code]: Yup.string()
    .required('Requerido')
    .min(6, 'Al menos 6 caracteres'),
});
