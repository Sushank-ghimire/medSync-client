import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/Assets";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="md:container text-xl md:text-2xl w-screen px-8 xl:px-16 md:px-4 py-4 flex justify-between items-center border-b-[1px] mx-auto border-black">
      <div className="h-16 w-16 overflow-hidden">
        <Link to={"/"}>
          <img
            className="cursor-pointer h-full w-full object-cover"
            src={assets.logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="justify-center text-sm uppercase font-semibold items-center gap-4 xl:gap-6 hidden md:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/doctors">All doctors</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a
          className="border border-slate-400 font-semibold text-xs px-4 py-2 rounded-full capitalize"
          href="http://localhost:5174/"
          target="_blank"
        >
          admin panel
        </a>
      </div>
      <NavLink className="hidden md:block" to="/register">
        <button className="py-2 px-4 rounded-full bg-indigo-500 text-white flex justify-center items-center text-sm">
          Create Account
        </button>
      </NavLink>
      <div className={`flex md:hidden cursor-pointer `}>
        <img
          onClick={() => setMenu((menu) => !menu)}
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-screen bg-white z-40 transition-transform transform ${
          menu ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-start text-left w-full p-8 space-y-4`}
      >
        <button
          className="self-end mb-8 text-black"
          onClick={() => setMenu(false)}
        >
          <img
            className="h-14 w-14 fixed top-6 right-4"
            src={assets.cross_icon}
            alt="Close"
          />
        </button>
        <Link
          className="w-full border-t border-black text-lg border-spacing-4 transition-all bg-violet-100 p-2"
          to="/"
          onClick={() => setMenu(false)}
        >
          Home
        </Link>
        <Link
          className="w-full border-t border-black text-lg border-spacing-4 transition-all bg-violet-100 p-2"
          to="/doctors"
          onClick={() => setMenu(false)}
        >
          All doctors
        </Link>
        <Link
          className="w-full border-t border-black text-lg border-spacing-4 transition-all bg-violet-100 p-2"
          to="/about"
          onClick={() => setMenu(false)}
        >
          About
        </Link>
        <Link
          className="w-full border-t border-black text-lg border-spacing-4 transition-all bg-violet-100 p-2"
          to="/contact"
          onClick={() => setMenu(false)}
        >
          Contact
        </Link>
        <Link
          className="w-full border-t border-black text-lg border-spacing-4 transition-all bg-violet-100 p-2"
          to="/register"
          onClick={() => setMenu(false)}
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
