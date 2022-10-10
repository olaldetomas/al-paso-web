import { useState } from 'react';
import { CodeForm } from '../components/CodeForm';
import { LoginForm } from '../components/LoginForm';
import { FormContainer } from '../styles/sharedStyles';

export default function Login() {
  const [codeSent, setCodeSent] = useState(false);
  const [email, setEmail] = useState();

  const handleLogin = async values => {
    setEmail(values.email);
    setCodeSent(true);
  };

  const handleCode = async code => {
    //Send data to backend
    console.log('Code', code);
  };

  return (
    <FormContainer>
      {!codeSent ? (
        <LoginForm onSubmit={handleLogin} />
      ) : (
        <CodeForm emailMessage={email} onSubmit={handleCode} />
      )}
    </FormContainer>
  );
}
