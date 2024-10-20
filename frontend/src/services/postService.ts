import createServiceApiClient from "../api/apiClient";
import { Post } from "../domain/entities/Post";

const postApiClient = createServiceApiClient({
  basePath: "/post",
  baseHost: "5001"
});

export const getAllPosts = async (): Promise<Post[]> => {
  return postApiClient.get<Post[]>("/getall");
};

export const getPostsByUser = async (userId: string): Promise<Post[]> => {
  return postApiClient.get<Post[]>(`/getbyuser/${userId}`);
};

interface CreatePostRequest {
  content: string;
}

export const createPost = async (
  content: string,
  userId: string
): Promise<void> => {
  return postApiClient.post<void, CreatePostRequest>(`/create/${userId}`, {
    content
  });
};

interface UpdatePostRequest {
  content: string;
}

export const updatePost = async (
  id: string,
  updatedPost: UpdatePostRequest
): Promise<void> => {
  return postApiClient.put<void, UpdatePostRequest>(
    `/update/${id}`,
    updatedPost
  );
};

export const deletePost = async (id: string): Promise<void> => {
  return postApiClient.delete<void>(`/delete/${id}`);
};
