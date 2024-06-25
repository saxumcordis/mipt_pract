import { useState } from 'react';
import { useFetch } from './useFetch';

const API_KEY = 'live_HC7DMd81VAt5wB5xBi6UYhVMvgpBfMixNCcF630RTnIoM9Ymw2hLJQexnV2K3OKW'


export const useInitListItems = () => {
  const { isLoading, handleFetch } = useFetch();

  const [items, setState] = useState([]);
  console.log(isLoading)
  const onFetchItem = async () => {
    const item = await handleFetch(`https://api.thecatapi.com/v1/images/search?&api_key=${API_KEY}&has_breeds=1`).then(e => e.json());

    setState(prev => [...prev, ...item.map(e => ({ ...e, like: 0 }))]);
  }

  return { items, isLoading, onFetchItem }
}
