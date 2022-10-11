import axios from 'axios';
import { getSavedTokenSync, saveToken } from './localStorage';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

export const ifSession =
  fetcher =>
  (...params) => {
    const savedToken = getSavedTokenSync();
    if (savedToken) {
      return fetcher(...params);
    } else {
      throw 'No token on client';
    }
  };

export const postApi = (url: string, body: any) => {
  instance
    .post(url, body)
    .then(result => console.log(result))
    .catch(error => console.log(error.toJSON()));
};

export const getApi = async url =>
  await instance.get(url).then(res => res.data);

export const saveProduct = async data => {
  console.log('saveProduct: ', data);
  return await postApi('/product', data);
};

export const login = async (data: { username: string; code: string }) => {
  const token = await postApi('/auth/login', data);
  saveToken(token);
  return token;
};
