import { FaArrowRight } from "react-icons/fa";
import Typewriter from "typewriter-effect"


const Home = () => {
  return (
    <div
      name="home"
      className="w-full  h-screen bg-gradient-to-t from-[rgb(29,39,54)]  via-black to-black text-gray-100 "
    >
      <div className="max-w-screen-lg mx-auto lg:flex md:flex sm:flex-row items-center justify-evenly gap-7 h-full px-4 md:flex-row">
        <div className="flex  w-[50%] flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold  bg-clip-text ">
            <Typewriter
              options={{
                strings: ["Hello, I am LB Logics"],
                autoStart: true,
                loop: true,
                delay: 150,
                cursor: "_",
              }}
            />
          </h2>
          <p className="text-gray-400 font-medium py-4 max-w-md text-3xl">
            Welcome to my Portfolio
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[rgb(181,89,25)] to-[rgb(44,11,10)] cursor-pointer gap-2 group ">
              Portfolio
              <span className="group-hover:rotate-90 duartion-500">
                <FaArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="h-[400px] ml-24 w-[800px]">
          <img
            src="src/images/hero image.jpg"
            alt="my profile"
            className="md:h-[800px] md:w-[800px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] shadow-[rgb(165,80,25)] shadow-2xl rounded-full object-cover items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
