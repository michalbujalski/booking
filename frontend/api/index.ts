import axios from 'axios';
import type { CreateTravelForm } from '@/models/travels/CreateTravelForm';
import type { Travel } from '@/models/travels/Travel';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const createTravel = async (form: CreateTravelForm) => {
  const { data } = await api.post<{ id: string }>('/travels', form);
  return data;
};

export const updateTravel = async (id: string, form: Partial<CreateTravelForm>) => {
  await api.patch(`/travels/${id}`, form);
}

export const fetchTravels = async () => {
  const { data } = await api.get<Travel[]>('/travels');
  return data;
};

export const fetchTravelDetails = async (id: string) => {
  const { data } = await api.get<Travel>(`/travels/${id}`);
  return data;
};
