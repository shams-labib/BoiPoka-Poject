import React from 'react';
import { Link } from 'react-router';
import BigBooks from '../assets/pngwing 1.png'

const Hero = () => {
    return (
     <div className='container mx-auto  border-1 border-gray-400 rounded-2xl shadow-xl bg-[#7CC4F8] mt-5 mb-5 grid grid-cols-2 place-items-center lg:px-[150px] py-[50px]  '>
        <div>
            <h1 className='text-[56px] font-bold'>Books to freshen up your bookshelf</h1>
            <button className='bg-green-600 rounded-xl font-bold py-[16px] px-[28px]'>View The List</button>
        </div>
        <div>
          <img className='h-full' src={BigBooks} alt="" />
        </div>
     </div>
    );
};

export default Hero;