import { useEffect, useState } from 'react';
import contactApi from '../api/contacts';
import useApi from '../hooks/useApi';
import useQuery from '../hooks/useQuery';
import useScroll from '../hooks/useScroll';
import CustomModal from './CustomModal';

const ModalA = () => {
  const [needToCall, setNeedToCall] = useState(false);
  const getContactApi = useApi(contactApi.getContacts);
  const { params, setPage, handleChange } = useQuery();

  useEffect(() => {
    if (needToCall) {
      getContactApi.request(params);
    } else {
      setNeedToCall(true);
    }
  }, [params.page, needToCall, getContactApi.hasMore]);

  useEffect(() => {
    if (needToCall && params.searchTerm) {
      getContactApi.request(params);
    } else {
      setNeedToCall(true);
    }

    return () => {
      getContactApi.setIsLoading(false);
      getContactApi.setContacts([]);
      setPage(1);
    };
  }, [needToCall, params.searchTerm]);

  const { lastElementRef } = useScroll(
    needToCall,
    setPage,
    getContactApi.isLoading,
    getContactApi.hasMore,
    params.searchTerm
  );

  return (
    <CustomModal
      contacts={getContactApi.contacts}
      lastElementRef={lastElementRef}
      isLoading={getContactApi.isLoading}
      hasMore={getContactApi.hasMore}
      handleChange={handleChange}
      error={getContactApi.error}
    />
  );
};

export default ModalA;
