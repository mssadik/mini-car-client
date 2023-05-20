import React from 'react';

const Sports = ({car}) => {
    const {image, name} = car;
    return (
        <div>
            <img className="w-[200px]" src={image} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Sports;