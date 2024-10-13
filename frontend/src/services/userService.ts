import apiClient from '../api/apiClient';
import { User } from '../domain/entities/User';

export const getUsers = async () => {
  const users = await apiClient<Array<User>>('/user');
  return users;
};

export const createUser = async (user: { name: string; email: string }) => {
  return apiClient('/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
};