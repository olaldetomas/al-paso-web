import { useRouter } from 'next/router';
import { useState } from 'react';
import { CodeForm } from '../components/CodeForm';
import { LoginForm } from '../components/LoginForm';
import { getToken, sendCode } from '../lib/api';
import { FormContainer } from '../styles/sharedStyles';

export default function Login() {
  const router = useRouter();
  const [codeSent, setCodeSent] = useState(false);
  const [email, setEmail] = useState();

  const handleOnSendCode = async ({ email }) => {
    setEmail(email);
    setCodeSent(true);
    await sendCode(email);
  };

  const handleOnLogin = async ({ code }) => {
    const token = await getToken(email, code);
    if (token) {
      router.push('/');
    }
  };

  return (
    <FormContainer>
      {!codeSent ? (
        <LoginForm onSubmit={handleOnSendCode} />
      ) : (
        <CodeForm emailMessage={email} onSubmit={handleOnLogin} />
      )}
    </FormContainer>
  );
}
