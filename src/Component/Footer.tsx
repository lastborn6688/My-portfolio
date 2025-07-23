import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 text-white via-gray-800 to-gray-700 px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div className="bg-gradient-to-b from-gray-800 text-white via-gray-800 gap-5 to-gray-700 px-6 py-10 ">
          <h2 className="text-xl font-bold mb-2  font-great-vibes bg-gradient-to-r from-[rgb(23,93,213)] to-white bg-clip-text text-transparent">LB Logics</h2>
          <p className="text-sm">
            Innovating from the street up. l build smart, scalable tech that vibes with the people.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-b from-gray-800 text-white via-gray-800 to-gray-700">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="bg-gradient-to-b from-gray-800 text-white via-gray-800 to-gray-700">
          <h3 className="text-lg font-semibold mb-3 text-white">Follow me <span  className="font-medium text-[12px]">on my social media platforms</span></h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FaWhatsapp className="w-5 h-5 hover:animate-bounce hover:scale-150 hover:text-green-300" /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter  className="w-5 h-5 hover:animate-bounce hover:scale-150 hover:text-black" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="w-5 h-5 hover:animate-bounce hover:scale-150 hover:text-pink-500" /></a>
            <a href="#" aria-label="Github"><FaGithub className="w-5 h-5 hover:animate-bounce hover:scale-150 hover:text-gray-800 hover:bg-white" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="w-5 h-5 hover:animate-bounce hover:scale-150 hover:text-blue-700" /></a>
            <a href="#" aria-label="Tiktok"><FaTiktok className="w-5 h-5 hover:animate-bounce hover:scale-150 hover:text-black"/></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10  pt-4 text-center text-sm">
        © {new Date().getFullYear()} <h1><span className="font-great-vibes bg-gradient-to-r from-[rgb(69,115,196)] to-white bg-clip-text text-transparent font-bold">LB logics</span> All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
