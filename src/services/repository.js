import api from './api';

export default class Repository {
  getUserById = async (id) => api.get(`/users/${id}`);

  putUser = async (id, data) => api.put(`/users/${id}`, data);

  getPhones = async (page = 1, limit = 10) =>
    api.get(`/phones?_page=${page}&_limit=${limit}`);

  editPhoneStatus = async (id, data) => api.patch(`/phones/${id}`, data);
}
