import { useState } from 'react';

const useQuery = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return {
    params: { page, pageSize, searchTerm },
    setSearchTerm,
    setPage,
    handleChange,
  };
};

export default useQuery;
