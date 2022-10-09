export enum FormFields {
  name = "name",
  category = "category",
  description = "description",
  price = "price",
}

export interface FormValues {
  [FormFields.name]: string;
  [FormFields.category]: string;
  [FormFields.description]: string;
  [FormFields.price]: number;
}

export const initialFormValues: FormValues = {
  [FormFields.name]: "",
  [FormFields.category]: "",
  [FormFields.description]: "",
  [FormFields.price]: null,
};
