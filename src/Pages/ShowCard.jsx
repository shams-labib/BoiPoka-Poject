import React from 'react';
import { useLoaderData } from 'react-router';


const ShowCard = () => {

    const card = useLoaderData();
    console.log(card)


    return (
        <div>
            <h1>Hello Showcard</h1>
        </div>
    );
};

export default ShowCard;