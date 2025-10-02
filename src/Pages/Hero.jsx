import React from 'react';
import { Link } from 'react-router';
import BigBooks from '../assets/pngwing 1.png'

const Hero = () => {
    return (
     <div className='container mx-auto  border-1 border-gray-400 rounded-2xl shadow-xl bg-[#7CC4F8] mt-5 mb-5 grid md:grid-cols-2 grid-cols-1 place-items-center md:px-[150px] md:py-[50px] p-15 '>
        <div className='order-2 md:order-2'>
            <h1 className='text-[56px] font-bold line-clamp-2'>Books to freshen up your bookshelf</h1>
           <Link to={'/home'}> <button  className='bg-green-600 cursor-pointer rounded-xl font-bold py-[16px] px-[28px] mt-5'>View The List</button></Link>
        </div>
        <div className='order-1 md:order-2'>
          <img className='h-full ' src={BigBooks} alt="" />
        </div>
     </div>
    );
};

export default Hero;