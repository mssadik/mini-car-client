import React from 'react';

const Military = ({car}) => {
    const {photo, toyName} = car;
    return (
        <div>
            <img className="w-[200px]" src={photo} alt="" />
            <h2>{toyName}</h2>
        </div>
    );
};

export default Military;