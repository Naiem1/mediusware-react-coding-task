import { useState } from 'react';

const useApi = (apiFunc) => {
  const [contacts, setContacts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (params) => {
    setIsLoading(true);

    try {
      const response = await apiFunc({ ...params });

      const {
        data: { results },
      } = response;

      setContacts((prevContacts) => [...prevContacts, ...results]);
    } catch (err) {
      setError(err.message);
      if (err.message) {
        setHasMore(false);
      }
      // throw new Error();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    request,
    contacts,
    error,
    isLoading,
    hasMore,
    error,
    setIsLoading,
    setContacts,
    setHasMore,
  };
};

export default useApi;
