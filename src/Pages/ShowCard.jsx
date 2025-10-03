import React from 'react';
import { useLoaderData } from 'react-router';
// import imgBook from '../assets/pngwing 1.png'


const ShowCard = () => {

    const card = useLoaderData();
    console.log(card)


    return (
        <div className='container mx-auto mt-10 mb-10 flex md:flex-row flex-col justify-between gap-10 p-10'>
            <div className='md:w-[50%]  md:h-[700px] h-[320px] bg-[#7CC4F8] flex items-center justify-center rounded-2xl shadow-xl'>
              <img className='w-[65%] md:w-[70%] rounded-xl' src={card.image} alt="Fuck you" />
            </div>
            <div className='md:w-[50%] space-y-4'>
             <h1>{card.bookName}</h1>
             <p className=' border-b-1 border-gray-300 pb-6'>By : {card.author}</p>
             <p className=' border-b-1 border-gray-300 pb-6'>{card.category}</p>
             <p>Review : {card.review}</p>

              <div className='flex items-center gap-5 border-b-1 border-gray-300 pb-6 '>
                <p className='font-bold'> Tag</p>
                {
                    card.tags.map((data, index) =>(
                   <div key={index}>
                      <button className='px-[15px] py-[7px] bg-[#7CC4F8] text-green-700 rounded-xl'>#{data}</button>
                   </div>
                    ) )
                }
              </div>
              <div className='flex justify-between  items-center'>
                <p>Number of Pages:</p>
                <p className='font-bold'>{card.totalPages}</p>
              </div>
              <div className='flex justify-between  items-center'>
                <p>Publisher: </p>
                <p className='font-bold'>{card.publisher}</p>
              </div>
              <div className='flex justify-between  items-center'>
                <p>Year of Publishing:</p>
                <p className='font-bold'>{card.yearOfPublishing}</p>
              </div>
              <div className='flex justify-between  items-center'>
                <p>Rating :</p>
                <p className='font-bold'>{card.rating}</p>
              </div>

              <div className="gap-3 flex">
                <button className='px-[28px] py-[15px] bg-white border-1 rounded-xl text-black font-bold'>Read</button>
              <button className='px-[28px] py-[15px] bg-[#50B1C9]  rounded-xl text-white font-bold'>Wishlist</button>
              </div>
            </div>
        </div>
    );
};

export default ShowCard;