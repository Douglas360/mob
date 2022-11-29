import useSWR from 'swr';
import { api } from '../services/api';

const fetcher = async (...urls) => {
  const responses = await Promise.all(urls.map(url => api.get(url)));

  const responseItems = responses.map(response => response.data);

  return responseItems;
};

export const useMultipleRequests = urls => {
  const { data, error } = useSWR(
    urls.map(url => url),
    fetcher,
    {
      revalidateOnReconnect: true,
      refreshWhenOffline: true,
      revalidateIfStale: true,
      refreshWhenHidden: true,
    },
  );

  return {
    data,
    error,
    isError: !!error,
    isLoading: !data && !error,
  };
};
