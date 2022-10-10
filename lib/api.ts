import axios from 'axios';
import { Body } from '../components/Layout/styled';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

const postApi = (url: string, body: any) => {
  instance
    .post(url, body)
    .then(result => console.log(result))
    .catch(error => console.log(error.toJSON()));
};

export const saveProduct = async data => {
  console.log('saveProduct: ', data);
  return await postApi('/product', data);
};
