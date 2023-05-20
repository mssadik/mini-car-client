import { useState } from "react";

const ToyRow = ({ car, }) => {
    const {sellerName, toyName, subCategory, price, quantity, _id } = car


    const handelViewDetails = (id) =>{
        fetch(`http://localhost:5000/cars/${id}`,{
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    

    return (
        <tr>
            <th>1</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handelViewDetails(_id)} className='btn btn-primary'>Details</button></td>
        </tr>
    );
};

export default ToyRow;