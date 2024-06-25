import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const createTravel = (data) => api.post('/travels', data);
