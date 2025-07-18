import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">BornTech</h2>
          <p className="text-sm">
            Innovating from the street up. We build smart, scalable tech that vibes with the people.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FaFacebookF className="w-5 h-5 hover:text-blue-600" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="w-5 h-5 hover:text-sky-500" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="w-5 h-5 hover:text-pink-500" /></a>
            <a href="#" aria-label="Github"><FaGithub className="w-5 h-5 hover:text-gray-800 dark:hover:text-white" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="w-5 h-5 hover:text-blue-700" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} BornTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
