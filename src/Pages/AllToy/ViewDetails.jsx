import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row border w-3/4">
                <img src={data.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <p className="text-xl font-bold">Car Name: {data.toyName}</p>
                    <p className=""><span className="font-bold">Seller Name:</span> {data.sellerName}</p>
                    <p className=""><span className="font-bold">Seller Email</span>: {data.sellerEmail}</p>
                    <p className=""><span className="font-bold">Sub Category</span>: {data.subCategory}</p>
                    <p className=""><span className="font-bold">Price</span>: {data.price}</p>
                    <p className=""><span className="font-bold">Rating</span>: {data.rating}</p>
                    <p className=""><span className="font-bold">Quantity</span>: {data.quantity}</p>
                    <p className="mt-8 mb-3"><span className="font-bold">Decription</span>: {data.decription}</p>
                    
                    <button className="btn btn-primary">Buy Nao</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;

// Detail description