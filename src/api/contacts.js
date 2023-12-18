import client from './client';

const getContacts = ({ page, pageSize, searchTerm }) => {
  return client.get('/contacts/', {
    params: {
      search: searchTerm,
      page,
      page_size: pageSize,
    },
  });
};

export default { getContacts };
