import { createPost } from "../../services/postService";
import { QueryClient } from "@tanstack/react-query";
import { ActionFunction } from "react-router-dom";

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request }) => {
    console.log("we running");
    const formData = await request.formData();
    const [content, userId] = [formData.get("content"), formData.get("userId")];
    console.log({ content, userId });
    if (typeof content !== "string" || typeof userId !== "string") {
      throw new Error("Invalid form data");
    }

    await createPost(content, userId);
    await queryClient.invalidateQueries({ queryKey: ["posts"] });
    return null;
  };
