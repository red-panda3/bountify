import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-3 flex justify-between items-center bg-gray-700 text-gray-100 transition duration-100">
      <div className="text-3xl ml-3">Bountify</div>
      <div className="flex items-center justify-around gap-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-teal-700 hover:bg-gray-600 p-2 text-white"
              : "hover:bg-gray-600 p-2 text-gray-100"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/startupList"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-teal-700 hover:bg-gray-600 p-2 text-white"
              : "hover:bg-gray-600 p-2 text-gray-100"
          }
        >
          StartUp
        </NavLink>
        <NavLink
          to="/startuphome"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-teal-700 hover:bg-gray-600 p-2 text-white"
              : "hover:bg-gray-600 p-2 text-gray-100"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-teal-700 hover:bg-gray-600 p-2 text-white"
              : "hover:bg-gray-600 p-2 text-gray-100"
          }
        >
          About
        </NavLink>
      </div>
      <div className="mr-[3%] p-2 hover:bg-gray-600">
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black hover:bg-gray-600 text-white"
              : "hover:bg-gray-600 text-gray-100"
          }
        >
          <User size={24}></User>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;