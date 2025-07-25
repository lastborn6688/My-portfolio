
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind.png';
import nextjs from '../images/nextjs.png';
import node from '../images/node.png';
import post from '../images/post.png'
import mongodb from '../images/mogodb.jpg'


const Experience = () => {
    const techs = [
        {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
        },
        {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
        },
        {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
        },
        {
        id: 4,
        src: react,
        title: 'React',
        style: 'shadow-blue-600',
        },
        {
        id: 5,
        src: tailwind,
        title: 'Tailwind CSS',
        style: 'shadow-sky-400',
        },
        {
        id: 6,
        src: nextjs,
        title: 'Next.js',
        style: 'shadow-white',
        },
        {
        id: 7,
        src: node,
        title: 'Node.js',
        style: 'shadow-green-500',
        },
        {
          id:8,
          src: post,
          title: 'Postman',
          style: 'shadow-orange-500'
        },
        {
        id: 9,
        src: mongodb,
        title: 'Mongodb',
        style: 'shadow-green-500',
        },
    ];
  return (
  <div id='Experience' className='bg-gradient-to-b from-[rgb(29,39,54)] via-gray-600 to-gray-800 w-full text-white md:h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-300 p-2 bg-gradient-to-r from-[rgb(23,93,213)] to-blue-200 bg-clip-text text-transparent'>Experience</p>
            <p className='py-6 text-2xl font-semibold'>These are the technologies I've worked with</p>
        </div>
        <div  className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
{
  techs.map(({ id, src, title, style }) => (
    
      <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} alt="" className='w-20 mx-auto' />
        <p className='mt-4'>{title}</p>
      </div>
    
  ))
}
    </div>
    </div>
  </div>
  )
}

export default Experience
