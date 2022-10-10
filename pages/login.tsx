import { useState } from 'react';
import { CodeForm } from '../components/CodeForm';
import { LoginForm } from '../components/LoginForm';
import { FormContainer } from '../styles/sharedStyles';

export default function Login() {
  const [submitCode, setSubmitCode] = useState(false);
  const [authCredencials, setAuthCredencials] = useState({});

  const loginOnSubmit = async (values: { email: string }) => {
    console.log(values);
    console.log('sending code to backend');
    setAuthCredencials({
      email: values.email,
    });
    setSubmitCode(true);
  };

  const codeOnSubmit = async values => {
    console.log(authCredencials);
    console.log('CODE');
  };

  return (
    <FormContainer>
      {submitCode ? (
        <CodeForm onSubmit={codeOnSubmit} />
      ) : (
        <LoginForm onSubmit={loginOnSubmit} />
      )}
    </FormContainer>
  );
}
