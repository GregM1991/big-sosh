import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/postService";

export const useAllPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    staleTime: 300000 // Cache for 5 minutes
  });
};
