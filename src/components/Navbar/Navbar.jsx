import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative md:px-20 px-10 border-b border-gray-300 py-4">
      <div className="flex justify-between items-center">
        <h3 className="md:text-2xl font-bold">CS — Ticket System</h3>
        <div className="flex">
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="md:block hidden text-sm ml-5 bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]  px-6 py-3  font-bold text-white rounded cursor-pointer hover:bg-[#2c1a8c] transition">
            + New Ticket
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-gray-100 h-14 px-4 ml-3 text-3xl rounded hover:bg-gray-300 transition"
          >
            <IoMenuSharp />
          </button>
        </div>
        <div
          className={`absolute top-full h-screen w-[250px] bg-gray-100 border-t border-gray-300 py-4 transition-all duration-300 ${
            isOpen ? "right-0 block" : "-right-100 hidden"
          }`}
        >
          <ul className="flex flex-col">
            <li className="bg-gray-300 rounded px-5 py-3 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-gray-300 rounded px-5 py-3 cursor-pointer">
              <a href="#">FAQ</a>
            </li>
            <li className="hover:bg-gray-300 rounded px-5 py-3 cursor-pointer">
              <a href="#">Changelog</a>
            </li>
            <li className="hover:bg-gray-300 rounded px-5 py-3 cursor-pointer">
              <a href="#">Download</a>
            </li>
            <li className="hover:bg-gray-300 rounded px-5 py-3 cursor-pointer">
              <a href="#">Blog</a>
            </li>
            <li className="hover:bg-gray-300 rounded px-5 py-3 cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
