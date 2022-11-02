import * as Yup from 'yup';
import { FormFields } from './types';

export const validationSchema = Yup.object({
  [FormFields.name]: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Requerido'),
  [FormFields.category]: Yup.string().required('Requerido'),
  [FormFields.description]: Yup.string().required('Requerido'),
  [FormFields.price]: Yup.string().required('Requerido'),
  [FormFields.image]: Yup.string(),
});
