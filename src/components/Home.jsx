import React from 'react';
import star from '../assets/Vector.png'
import { useLoaderData } from 'react-router';

const Home = () => {

    const arrays = useLoaderData();
    


    return (
       <div className='container mx-auto  space-y-8 mt-5 mb-10'>
        <h1 className='text-2xl text-center font-semibold'>Books</h1>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 place-items-center'>
           {
            arrays.map((data, index) =>  <div key={index} className='border-1 border-gray-500 rounded-2xl shadow-md w-[350px]  p-6 space-y-5'>
                <div className='w-full h-40'>
                    <img className='object-cover w-full h-full rounded-xl' src={data.image} alt="" />
                </div>
                <div className='flex justify-start gap-[50px] text-green-500'>
                    <h1>Young Adult</h1>
                    <h1>Identity</h1>
                </div>
                <h1 className='text-2xl font-semibold'>The Catcher in the Rye</h1>
                <p>By : {data.author}</p>

                <div className='flex justify-between'>
                    <p>{data.category}</p>
                   <div className='flex gap-2'>
                     <p>{data.rating}</p>
                     <img src={star} alt="" />
                   </div>
                </div>
            </div>)
           }
        </div>
       </div>
    );
};

export default Home;