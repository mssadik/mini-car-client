import React from 'react';
import { FaStar } from 'react-icons/fa';

const Sports = ({ car }) => {
    const { image, name, price } = car;
    return (
        <div className="border mx-auto border-gray-300 rounded-lg p-4 shadow-md">
            <img className="w-[200px] rounded-md mb-2" src={image} alt="" />
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-gray-600 font-bold">${price}</p>
            <div className="flex gap-2 mt-2">
                <FaStar className="text-orange-500"></FaStar>
                <FaStar className="text-orange-500"></FaStar>
                <FaStar className="text-orange-500"></FaStar>
                <FaStar className="text-orange-500"></FaStar>
                <FaStar className="text-orange-500"></FaStar>
            </div>
            <button className="btn btn-warning text-white btn-sm mt-5">Details</button>
        </div>
    );
};

export default Sports;