
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyRow = ({ car, }) => {
    console.log(car);
    const {sellerName, toyName, subCategory, rating, price, quantity, _id, sellerEmail } = car


    

    

    return (
        <tr>
            <th>*</th>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{rating} <FaStar className="text-red-500"></FaStar></td>
            <td>{quantity}</td>
            <td><Link to={`/cars/${_id}`} className='btn btn-primary'>Details</Link></td>
        </tr>
    );
};

export default ToyRow;