import { useState } from 'react';


export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async (url) => {
    setIsLoading(true);

    const res = await fetch(url);

    setIsLoading(false);

    return res;
  }

  return { isLoading, handleFetch }
}
