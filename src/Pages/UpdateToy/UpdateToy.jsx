import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const UpdateToy = () => {
    const {user} = useContext(AuthContext);
    const car = useLoaderData()
    const  {_id, photo, toyName, sellerName, subCategory, rating, quantity, decription, price} = car;
    const handelUpdateToy = event =>{
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
        fetch(`https://test-two-sigma-13.vercel.app/cars/${_id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: ' Toy Update Successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10 text-white">Update This Toy: {toyName}</h2>
            <hr className="mx-40" />
            <div>
                <form onSubmit={handelUpdateToy}>
                    <div className="flex   flex-col md:flex-row md:gap-4 p-10 md:w-1/3">
                        <div className="style">
                            <div className=" md:mb-0">
                                <label htmlFor="photo">Picture URL</label>
                                <input className="w-full md:w-64" type="text" name="photo" required defaultValue={photo} />
                            </div>
                            <div>
                                <label htmlFor="toyName">Toy Name</label>
                                <input className="w-full md:w-64" type="text" name="toyName" required defaultValue={toyName} />
                            </div>
                            <div>
                                <label htmlFor="sellerName">Seller Name</label>
                                <input className="w-full md:w-64" type="text" name="sellerName" required defaultValue={sellerName} />
                            </div>
                        </div>
                        <div className="style">
                            <div className=" md:mb-0">
                                <label htmlFor="sellerEmail">Seller Email</label>
                                <input className="w-full md:w-64" type="email" name="sellerEmail" required defaultValue={user?.email} />
                            </div>
                            <div>
                                <label htmlFor="subCategory">Sub Category</label>
                                <input className="w-full md:w-64" type="text" name="subCategory" required defaultValue={subCategory} />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating</label>
                                <input className="w-full md:w-64" type="text" name="rating" required defaultValue={rating} />
                            </div>
                        </div>
                        <div className="style">
                            <div className=" md:mb-0">
                                <label htmlFor="quantity">Available Quantity</label>
                                <input className="w-full md:w-64" type="text" name="quantity" required defaultValue={quantity} />
                            </div>
                            <div>
                                <label htmlFor="decription">Detail Description</label>
                                <input className="w-full md:w-64" type="text" name="decription" required defaultValue={decription} />
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <input className="w-full md:w-64" type="text" name="price" required defaultValue={'$' + price} />
                            </div>
                        </div>
                    </div>
                        <input  className="btn btn-wide ml-8 mb-10 bg-red-500 text-white" type="submit" value="Update Car" />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;