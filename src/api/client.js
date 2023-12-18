import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://contact.mediusware.com/api',
});

export default apiClient;
