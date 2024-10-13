import { createUser } from "../../services/userService";
import { QueryClient } from "@tanstack/react-query";
import { ActionFunction } from "react-router-dom";

export const action = (queryClient: QueryClient): ActionFunction => 
  async ({ request }) => {
    const formData = await request.formData();
    const newUser = {
      name: formData.get("name") as string,
      email: formData.get("email") as string
    };
    // Perform the mutation by calling the API
    await createUser(newUser);
    // Invalidate the `users` query so that it refetches the updated data
    await queryClient.invalidateQueries({ queryKey: ["users"] });
    // Optionally, return a redirect or success response if needed
    return null;
  };