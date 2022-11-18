import useSWR from 'swr'
import { api } from '../services/api';


export function useFetch(url) {
  const { data, dataError, mutate } = useSWR(url, async url => {
    const response = await api.get(url)
        
    return response.data;
  })

  return { data, dataError, mutate }
}


