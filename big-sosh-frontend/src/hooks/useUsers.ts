import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userService";
import { User } from "../domain/entities/User";

// Hook to fetch the user list
export const useUserList = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 300000
  });
};
