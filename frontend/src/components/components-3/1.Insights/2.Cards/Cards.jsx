import React from 'react';
import Content from './arr';
import Card from './Card-props';

function Cards() {
    return (
        <div className='w-full max-w-screen-lg mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {Content.map((item) => (
                    <Card key={item.id} img={item.img} title={item.title} description={item.description} />
                ))}
            </div>
            <button className='border-2 border-white mt-10 mx-auto p-5 text-2xl rounded-xl hover:cursor-pointer hover:bg-white hover:text-black duration-300'>
                Next
            </button>
        </div>
    );
}

export default Cards;
