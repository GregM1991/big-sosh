import createServiceApiClient from "../api/apiClient";
import { User } from "../domain/entities/User";

const userApiClient = createServiceApiClient({ basePath: "/User" });

export const getUsers = async () => {
  return userApiClient.get<User[]>("/getAll");
};

interface CreateUserRequest {
  name: string;
  email: string;
}

export const createUser = async (user: { name: string; email: string }) => {
  return userApiClient.post<User, CreateUserRequest>("create", user);
};
