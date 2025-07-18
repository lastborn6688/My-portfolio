import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const obj = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className=" ">
      <div className="text-white lg:ml-[7.5rem] lg:mt-5 p-4 flex justify-between px-4 bg-black/30 backdrop-blur-md items-center shadow-lg h-20 fixed lg:w-[80%] w-full rounded-[2rem] z-50">
        <h1 className="font-great-vibes font-extrabold text-3xl bg-gradient-to-r from-[rgb(23,93,213)] to-white bg-clip-text text-transparent">LB logics </h1>
        <div className="flex flex-row gap-2 items-center">
          <ul className="hidden md:flex gap-5 ">
            {obj.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-gray-00 font-medium  text-white hover:scale-110 duration-300 "
              >
                <Link to={item.link} smooth duration={500}>
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="pr-4 cursor-pointer z-10 text-gray-100 md:hidden hover:text-gray-400 duration-300"
        >
          {nav ? (
            <FaTimes className="text-white absolute z-20 pr-6" size={40} />
          ) : (
            <FaBars size={30} />
          )}
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-[rgb(252,252,253)] via-[rgb(74,74,80)] to-black text-gray-100">
              {obj.map((item) => (
                <li key={item.id} className="px-4 cursor-pointer py-6 text-4xl">
                  {item.link}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
