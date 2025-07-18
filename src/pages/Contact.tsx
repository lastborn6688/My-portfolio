import React from "react";
import { FaHandshake } from "react-icons/fa";

const Contact = () => {
  return (
    <div name='contact' className="bg-gradient-to-b to-[rgb(29,39,54)] via-gray-700 from-gray-800 w-full h-full p-4 text-white">
      <div className="flex flex-col p-4  justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 p-2">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center  items-center">
          <form
            action="https://getform.io/f/axoyznqb"
            method="POST"
            className="flex flex-col gap-4 w-full md-w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Yourname eg: John Doe"
              className="p2 py-3 px-2
            bg-transparent border-2   rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Yourname eg: JohnDoe@gmail.com"
              className="p2 py-3 px-2
            bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              placeholder="Your message here"
              className="p2 py-3 px-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="bg-black cursor-pointer shadow-lg group relative shadow-blue-300  hover:bg-gray-800 overflow-hidden transition-all text-white px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300">
              <span className="transition-all duration-300 group-hover:mr-2">Submit to get in touch</span>
              <span className="transform -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 flex justify-center items-center"><FaHandshake />
</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
