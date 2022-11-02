export enum FormFields {
  name = 'name',
  category = 'category',
  description = 'description',
  price = 'price',
  image = 'image',
}

export interface FormValues {
  [FormFields.name]: string;
  [FormFields.category]: string;
  [FormFields.description]: string;
  [FormFields.price]: number | string;
  [FormFields.image]: string | undefined;
}

export const initialFormValues: FormValues = {
  [FormFields.name]: '',
  [FormFields.category]: '',
  [FormFields.description]: '',
  [FormFields.price]: '',
  [FormFields.image]: '',
};
