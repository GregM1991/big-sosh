import { Form, useFetcher } from "react-router-dom";
import { useAllPosts } from "../../hooks/useAllPosts";

export const PostsListPage = () => {
  const { data: posts, isLoading, isError } = useAllPosts();
  const fetcher = useFetcher();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Recent Posts</h1>
      <div className="grid grid-cols-1 gap-6 place-items-center">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow-lg p-4 bg-white w-[600px]"
          >
            <h2 className="font-bold text-lg mb-2">User {post.userId}</h2>
            <p className="mb-4 text-gray-700">{post.content}</p>

            {/* Comments Form */}
            <fetcher.Form method="post" action={`/posts/${post.id}/comments`}>
              <label
                htmlFor={`comment-${post.id}`}
                className="block mb-1 font-semibold"
              >
                Add a Comment
              </label>
              <textarea
                id={`comment-${post.id}`}
                name="content"
                className="border p-2 w-full mb-2"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Comment
              </button>
            </fetcher.Form>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 text-center">Add New Post</h2>
      <Form
        method="post"
        className="mt-6 mx-auto max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 font-semibold">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userId" className="block mb-2 font-semibold">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Create Post
        </button>
      </Form>
    </div>
  );
};
