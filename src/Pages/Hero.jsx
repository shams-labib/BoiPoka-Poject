import React from 'react';
import { Link } from 'react-router';
import BigBooks from '../assets/pngwing 1.png'

const Hero = () => {
    return (
     <div className='p-7'>
      <div className='container mx-auto  border-1 border-gray-400 rounded-2xl shadow-xl bg-[#7CC4F8] mt-5 mb-5 grid md:grid-cols-2 grid-cols-1 place-items-center  md:px-[150px] md:py-[50px] p-15 '>
        <div className='order-2 md:order-2'>
            <h1 className='md:text-[56px] text-2xl mt-3 md:mt-0 font-bold line-clamp-2'>Books to freshen up your bookshelf</h1>
           <Link to={'/home'}> <button  className='bg-green-600 cursor-pointer rounded-lg md:text-lg text-sm  p-2 font-bold md:p-4  mt-5'>View The List</button></Link>
        </div>
        <div className='order-1 md:order-2 text-center'>
          <img className='md:h-full h-[60%] w-[70%] md:w-full ' src={BigBooks} alt="" />
        </div>
     </div>
     </div>
    );
};

export default Hero;