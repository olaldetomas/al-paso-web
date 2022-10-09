import { useField } from "formik";
import {
  TextAreaContainer,
  BaseInput,
  PrefixInputContainer,
  PrefixInputStyled,
  PrefixText,
  ErrorMessageContainer,
  FieldContainer,
  SelectContainer,
  FieldTextAreaContainer,
  Label,
} from "./styled";

const ErrorMessage = ({ meta }) => {
  return (
    <>
      {meta.touched && meta.error && (
        <ErrorMessageContainer>{meta.error}</ErrorMessageContainer>
      )}
    </>
  );
};

export const Input = props => {
  const [field, meta] = useField(props.name);
  return (
    <FieldContainer>
      <Label>{props.label}</Label>
      <BaseInput {...field} {...props} />
      <ErrorMessage meta={meta} />
    </FieldContainer>
  );
};

export const TextArea = props => {
  const [field, meta] = useField(props.name);
  return (
    <FieldTextAreaContainer>
      <Label>{props.label}</Label>
      <TextAreaContainer {...field} {...props}></TextAreaContainer>
      <ErrorMessage meta={meta} />
    </FieldTextAreaContainer>
  );
};

export const PrefixInput = props => {
  const [field, meta] = useField(props.name);
  return (
    <FieldContainer>
      <Label>{props.label}</Label>
      <PrefixInputContainer {...props} className="input-icon">
        <PrefixInputStyled
          type="number"
          className="form-control"
          placeholder="0.00"
          {...field}
        />
        <PrefixText>{props.prefixText}</PrefixText>
      </PrefixInputContainer>
      <ErrorMessage meta={meta} />
    </FieldContainer>
  );
};

export const Select = props => {
  const [field, meta] = useField(props.name);
  return (
    <FieldContainer>
      <Label>{props.label}</Label>
      <SelectContainer {...field} {...props}>
        {props.options.map(option => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </SelectContainer>
      <ErrorMessage meta={meta} />
    </FieldContainer>
  );
};
