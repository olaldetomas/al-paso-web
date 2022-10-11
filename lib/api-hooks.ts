import useSWR from 'swr';
import { getApi, ifSession } from './api';

interface ApiResponse {
  data: unknown;
  isLoading: boolean;
  isError: boolean;
}

export function useAuth(): ApiResponse {
  const { data, error } = useSWR('/auth/me', ifSession(getApi));
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
