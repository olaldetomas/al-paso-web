import styled from 'styled-components';

export const FieldContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export const FieldTextAreaContainer = styled.div`
  width: 100%;
  height: 160px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const BaseInput = styled.input`
  border-radius: ${({ theme }) => theme.rounded.sm};
  height: 50px;
  font-size: 15px;
  font-weight: 400;
  border: solid 1px;
  padding-left: 15px;
  margin-top: 5px;
  width: 100%;
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

export const PrefixInputContainer = styled.div`
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

export const PrefixInputStyled = styled(BaseInput)`
  padding-left: 40px;
`;

export const PrefixText = styled.i`
  width: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.g5};
  margin-left: 10px;
`;

export const TextAreaContainer = styled(BaseInput).attrs({
  as: 'textarea',
})`
  padding-top: 10px;
  font-weight: 400;
  max-width: 100%;
  height: 100px;
  resize: none;
`;

export const ErrorMessageContainer = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.message.error};
`;

export const SelectContainer = styled(BaseInput).attrs({ as: 'select' })`
  -webkit-appearance: none;
  box-sizing: border-box;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.304 125.304"><path d="M 50 90 L -1 21 h 100" fill="%23343334"/></svg>');
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: center right 0.5rem;
`;
