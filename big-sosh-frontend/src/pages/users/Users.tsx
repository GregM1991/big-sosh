import { Form } from "react-router-dom";
import { useUserList } from "../../hooks";

export function Users() {
  // Use the custom hook to fetch users
  const { data: users, isLoading, isError } = useUserList();

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="list-disc pl-5">
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Add New User</h2>
      <Form method="post" action="/users" className="mt-4">
        {" "}
        {/* Submit form via action */}
        <div className="mb-2">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create User
        </button>
      </Form>
    </div>
  );
}
