import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = ["Home", "About", "Portfolio", "Experience", "Contact"];

  return (
    <div className="fixed top-5 rounded-full ml-0 lg:ml-32 h-20 w-[100vw] lg:w-[80%] bg-black/30 backdrop-blur-md z-50 flex justify-between items-center px-6 text-white">
      <h1 className="text-3xl font-extrabold font-great-vibes bg-gradient-to-r from-[rgb(23,93,213)] to-white bg-clip-text text-transparent ">LB Logics</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link} className="cursor-pointer hover:scale-105 duration-200 hover:underline">
            <Link to={link} smooth={true} duration={500} offset={-80} >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div onClick={() => setNav(!nav)} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center md:hidden">
          {links.map((link) => (
            <li key={link} className="text-4xl py-6">
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
