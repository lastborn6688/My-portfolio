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
    <div id='Portfolio' className='bg-gradient-to-b  via-gray-800 to-[rgb(29,39,54)] from-[rgb(5,5,5)] w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-[rgb(23,93,213)] to-blue-200 bg-clip-text text-transparent'>Portfolio</p>
                <p className='text-2xl py-6'>Check out some ofk my work here</p>
            </div>
            
            
                            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolio.map(({ id, src }) => (
            
                <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex justify-center items-center '>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150
                         '>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150
                         '>Code</button>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
