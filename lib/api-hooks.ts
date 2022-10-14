import useSWR from 'swr';
import { fetchApi } from './fetch-api';

export function useAuth() {
  const { data, error } = useSWR('/auth/me', fetchApi);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
