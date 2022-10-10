export enum FormFields {
  code = 'code',
}

export interface FormValues {
  [FormFields.code]: string;
}

export const initialFormValues: FormValues = {
  [FormFields.code]: '',
};
