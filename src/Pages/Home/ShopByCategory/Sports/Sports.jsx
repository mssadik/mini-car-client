import React from 'react';

const Sports = ({car}) => {
    const {image, name, price} = car;
    return (
        <div className="border mx-auto border-gray-300 rounded-lg p-4 shadow-md">
            <img className="w-[200px] rounded-md mb-2" src={image} alt="" />
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-gray-600 font-bold">${price}</p>
            <button className="btn btn-warning text-white btn-sm mt-5">Buy Now</button>
        </div>
    );
};

export default Sports;