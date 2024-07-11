import axios from 'axios';
import type { CreateTravelForm } from '@/models/travels/CreateTravelForm';
import type { Travel } from '@/models/travels/Travel';
import type { BookingForm } from '@/models/bookings/BookingForm';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const createTravel = async (form: CreateTravelForm) => {
  const { data } = await api.post<{ id: string }>('/travels', form);
  return data;
};

export const updateTravel = async (
  id: string,
  form: Partial<CreateTravelForm>
) => {
  return api.patch(`/travels/${id}`, form);
};

export const fetchTravels = async () => {
  const { data } = await api.get<Travel[]>('/travels');
  return data;
};

export const fetchTravelDetails = async (id: string) => {
  const { data } = await api.get<Travel>(`/travels/${id}`);
  return data;
};

export const deleteTravel = (id: string) => {
  return api.delete(`/travels/${id}`);
};

export const createBooking = async (form: BookingForm) => {
  const { data } = await api.post('/bookings', form);
  return data;
};

export const fetchBookings = async () => {
  const { data } = await api.get('/bookings');
  return data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await api.post<{ url: string }>('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data.url;
};
