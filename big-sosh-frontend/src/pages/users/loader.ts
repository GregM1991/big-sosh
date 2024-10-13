import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import { getUsers } from "../../services/userService";

export const loader = (queryClient: QueryClient): LoaderFunction => 
  async () => {
    await queryClient.fetchQuery({ queryKey: ["users"], queryFn: getUsers });
    return null;
  };