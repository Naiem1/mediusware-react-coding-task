import { useEffect, useState } from 'react';
import contactApi from '../api/us-contacts';
import useApi from '../hooks/useApi';
import useQuery from '../hooks/useQuery';
import useScroll from '../hooks/useScroll';
import CustomModal from './CustomModal';

const ModalB = () => {
  const [needToCall, setNeedToCall] = useState(false);
  const getContactApi = useApi(contactApi.getUsContacts);
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
    getContactApi.setIsLoading,
    getContactApi.setContacts
  );

  return (
    <CustomModal
      contacts={getContactApi.contacts}
      lastElementRef={lastElementRef}
      isLoading={getContactApi.isLoading}
      hasMore={getContactApi.hasMore}
      handleChange={handleChange}
    />
  );
};

export default ModalB;
