import diagramOne from "../images/WhatsApp Image 2025-06-07 at 17.24.01_fcf22b93.jpg";
import diagramTwo from "../images/WhatsApp Image 2025-06-07 at 17.24.01_5a136d1d.jpg";
import diagramThree from "../images/WhatsApp Image 2025-06-07 at 17.23.05_f012349d.jpg";

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: diagramOne,
        },
        {
            id: 2,
            src: diagramTwo,
        },
        {
            id: 3,
            src: diagramThree,
        }
    ]
    return (
  <div
    id="Portfolio"
    className="bg-gradient-to-b from-[rgb(5,5,5)] via-gray-800 to-[rgb(29,39,54)] w-full text-white"
  >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen">
      <div className="pb-8">
        <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-[rgb(23,93,213)] to-blue-200 bg-clip-text text-transparent">
          Portfolio
        </p>
        <p className="text-xl sm:text-2xl py-6">
          Check out some of my works here
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
        {portfolio.map(({ id, src }) => (
          <div
            key={id}
            className="shadow-md shadow-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105 w-full object-cover"
            />
            <div className="flex justify-center items-center">
              <button className="w-1/2 px-4 py-2 sm:px-6 sm:py-3 m-2 sm:m-4 text-sm sm:text-base duration-200 hover:scale-110">
                Demo
              </button>
              <button className="w-1/2 px-4 py-2 sm:px-6 sm:py-3 m-2 sm:m-4 text-sm sm:text-base duration-200 hover:scale-110">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default Portfolio
