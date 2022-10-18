import useSWR from 'swr';
import { fetchApi } from './fetch-api';
import { ifSession } from './middlewares';

export function useAuth() {
  const { data, error } = useSWR('/auth/me', ifSession(fetchApi), {
    dedupingInterval: 10000,
    errorRetryCount: 1,
  });
  console.log('data', data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
