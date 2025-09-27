// Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[black] text-gray-200 py-8 md:px-20 px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:justify-items-end py-10">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">CS — Ticket System</h3>
          <p className="text-gray-300">
            This website is dedicated to providing the best solutions and
            services to our users with modern technology and design. User can
            buy their essential tickets with just a few clicks. It's very easy
            to use and user friendly.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Missions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Product and Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Download Apps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <a href="#" className="hover:text-white flex items-center gap-x-3">
              <FaFacebook className="text-white" />{" "}
              <span>@CS — Ticket System </span>
            </a>
            <a href="#" className="hover:text-white flex items-center gap-x-3">
              <FaTwitter className="text-white" />{" "}
              <span>@CS — Ticket System </span>
            </a>
            <a href="#" className="hover:text-white flex items-center gap-x-3">
              <FaInstagram className="text-white" />{" "}
              <span>@CS — Ticket System </span>
            </a>
            <a href="#" className="hover:text-white flex items-center gap-x-3">
              <FaLinkedin className="text-white" />{" "}
              <span>@CS — Ticket System </span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-8 pt-6 text-center text-white">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
