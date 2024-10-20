import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import { getAllPosts } from "../../services/postService";

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async () => {
    await queryClient.fetchQuery({ queryKey: ["posts"], queryFn: getAllPosts });
    return null;
  };
