import { Outlet, NavLink } from "react-router-dom";

export function Root() {
  return (
    <div className="flex flex-col min-h-screen w-full h-full">
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-4 w-full">
        <Outlet />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>© 2024 Big Sosh. All rights reserved.</p>
      </footer>
    </div>
  );
}
