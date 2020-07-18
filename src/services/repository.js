import api from './api';

export default class Repository {
  getUser = async () => api.get('/users');

  getPhones = async (page = 1, limit = 10) => api.get(`/phones?_page=${page}&_limit=${limit}`);
}
