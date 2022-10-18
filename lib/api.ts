import { postApi } from './fetch-api';
import { saveToken } from './localStorage';

export const saveProduct = async data => {
  return await postApi('/product', data);
};

export const getToken = async (email, code) => {
  const { token } = await postApi('/auth/login', {
    body: {
      username: email,
      code: code,
    },
  });
  saveToken(token);
  return token;
};

export const sendCode = async (email: string) => {
  const token = await postApi('/auth/send-code', { body: { email } });
  return token;
};
