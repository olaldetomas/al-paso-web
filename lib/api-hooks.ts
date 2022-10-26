import useSWR from 'swr';
import { fetchApi } from './fetch-api';
import { ifSession } from './middlewares';

export function useAuth() {
  const { data, error } = useSWR('/auth/me', ifSession(fetchApi), {
    dedupingInterval: 10000,
    errorRetryCount: 1,
  });
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useProducts() {
  const { data, error } = useSWR('/product', ifSession(fetchApi));
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
