
import { Link } from "react-router-dom";

const ToyRow = ({ car, }) => {
    const {sellerName, toyName, subCategory, price, quantity, _id, sellerEmail } = car


    

    

    return (
        <tr>
            <th>1</th>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td><Link to={`/cars/${_id}`} className='btn btn-primary'>Details</Link></td>
        </tr>
    );
};

export default ToyRow;