import { postApi } from './fetch-api';
import { saveToken } from './localStorage';

export const saveProduct = async data => {
  return await postApi('/product', data);
};

export const login = async (data: { username: string; code: string }) => {
  const token = await postApi('/auth/login', data);
  saveToken(token);
  return token;
};
