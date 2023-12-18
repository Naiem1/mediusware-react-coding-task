import client from './client';

const country = 'united%20states';

const getUsContacts = ({ page, pageSize, searchTerm }) => {
  return client.get(`/country-contacts/${country}/`, {
    params: {
      page,
      page_size: pageSize,
      search: searchTerm,
    },
  });
};
export default { getUsContacts };
