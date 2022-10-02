import styled from "styled-components";
import ReactSelect from "react-select";

const BaseInputContainer = styled.input`
  border-radius: 15px;
  height: 50px;
  font-size: 15px;
  font-weight: 400;
  border: solid 1px;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: ${({ theme }) => theme.colors.g4};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.g5};
  }
  :focus {
    outline: none !important;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.g10};
  }
`;

const SelectContainer = styled(ReactSelect)`
  .react-select__control {
    border-radius: 15px;
    font-family: ${({ theme }) => theme.fontFamily};
    height: 50px;
    border: solid 1px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.g5};
    border-color: ${({ theme }) => theme.colors.g4};
  }

  .react-select__control--is-focused {
    box-shadow: ${({ theme }) => theme.shadow.sm};
    outline: none;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.g10};
  }
`;

const PrefixInputContainer = styled.div`
  position: relative;
  i {
    position: absolute;
    display: block;
    transform: translate(0, -50%);
    top: 50%;
    cursor: default;
    text-align: center;
    font-style: normal;
  }
`;

const PrefixInputStyled = styled(BaseInputContainer)`
  padding-left: 40px;
`;

const PrefixText = styled.i`
  width: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.g5};
  margin-left: 10px;
`;

const TextAreaContainer = styled(BaseInputContainer).attrs({
  as: "textarea",
})`
  padding-top: 10px;
  font-weight: 400;
`;

const TextArea = props => {
  return <TextAreaContainer {...props}>{props.children}</TextAreaContainer>;
};

const Input = props => {
  return <BaseInputContainer {...props}>{props.children}</BaseInputContainer>;
};

const PrefixInput = () => {
  return (
    <PrefixInputContainer className="input-icon">
      <PrefixInputStyled
        type="number"
        className="form-control"
        placeholder="0.00"
      />
      <PrefixText>$</PrefixText>
    </PrefixInputContainer>
  );
};

const Select = props => {
  return (
    <SelectContainer
      className="react-select"
      classNamePrefix="react-select"
      {...props}
    >
      {props.children}
    </SelectContainer>
  );
};

export { Input, Select, TextArea, PrefixInput };
