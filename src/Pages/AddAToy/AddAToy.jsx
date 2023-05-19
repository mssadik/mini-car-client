import { useContext } from "react";
import "./AddAToy.css"
import { AuthContext } from './../../Providers/AuthProviders';
const AddAToy = () => {
    const {user} = useContext(AuthContext);
    const handelAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const decription = form.decription.value;
        const price = form.price.value;
        const car = {photo, toyName, sellerName, sellerEmail, subCategory, rating, quantity, decription, price}
        console.log(car);

        // send data to server
        fetch('http://localhost:5000/cars',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => res.json())
        .then(data =>console.log(data))

    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10">Add A Toy</h2>
            <hr className="mx-40" />
            <div>
                <form onSubmit={handelAddToy}>
                    <div className="flex   flex-col md:flex-row md:gap-4 p-10 md:w-1/3">
                        <div className="style">
                            <div className=" md:mb-0">
                                <label htmlFor="photo">Picture URL</label>
                                <input className="w-full md:w-64" type="text" name="photo" required placeholder="Picture URL" />
                            </div>
                            <div>
                                <label htmlFor="toyName">Toy Name</label>
                                <input className="w-full md:w-64" type="text" name="toyName" required placeholder="Toy Name" />
                            </div>
                            <div>
                                <label htmlFor="sellerName">Seller Name</label>
                                <input className="w-full md:w-64" type="text" name="sellerName" required placeholder="Seller Name" />
                            </div>
                        </div>
                        <div className="style">
                            <div className=" md:mb-0">
                                <label htmlFor="sellerEmail">Seller Email</label>
                                <input className="w-full md:w-64" type="email" name="sellerEmail" required defaultValue={user?.email} />
                            </div>
                            <div>
                                <label htmlFor="subCategory">Sub Category</label>
                                <input className="w-full md:w-64" type="text" name="subCategory" required placeholder="Sub Category" />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating</label>
                                <input className="w-full md:w-64" type="text" name="rating" required placeholder="Rating" />
                            </div>
                        </div>
                        <div className="style">
                            <div className=" md:mb-0">
                                <label htmlFor="quantity">Available Quantity</label>
                                <input className="w-full md:w-64" type="text" name="quantity" required placeholder="Available Quantity" />
                            </div>
                            <div>
                                <label htmlFor="decription">Detail Description</label>
                                <input className="w-full md:w-64" type="text" name="decription" required placeholder="Detail Description" />
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <input className="w-full md:w-64" type="text" name="price" required placeholder="Price" />
                            </div>
                        </div>
                    </div>
                        <input  className="btn btn-wide ml-8 mb-10" type="submit" value="Add A Car" />
                </form>
            </div>
        </div>
    );
};

export default AddAToy;

// Available quantity
// Detail description
