
const Car = ({ car }) => {
    const { photo, sellerName, toyName, subCategory, price, quantity, } = car
    return (
        <div className="border rounded-md p-5 text-white ">
            <img className="w-[500px] h-[150px] rounded-lg" src={photo} alt="" />
            <p className="text-xl font-bold mt-4">Name: {toyName}</p>
            <p>Seller Name: {sellerName}</p>
            <p>Sub Category: {subCategory}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button className="btn btn-block mt-5 btn-primary animate__animated animate__bounceIn">View Details</button>
        </div>



    );
};

export default Car;