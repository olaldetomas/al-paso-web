export enum FormFields {
  email = 'email',
}

export interface FormValues {
  [FormFields.email]: string;
}

export const initialFormValues: FormValues = {
  [FormFields.email]: '',
};
