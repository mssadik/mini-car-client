import Swal from "sweetalert2";


const MyToyRow = ({ car }) => {
    const {_id, decription, photo, price, quantity, rating, sellerEmail, sellerName, subCategory, toyName } = car;
    const handelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this car?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://test-two-sigma-13.vercel.app/cars/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then(() => {
                            window.location.reload(); // Reload the page to remove the deleted item from UI
                        });
                    }
                });
            }
        });
    };
    
    return (
        <div className="card flex flex-col lg:flex-row card-side bg-base-100 shadow-xl">
            <div><figure><img src={photo} alt="Movie" /></figure></div>
            <div className="card-body w-3/4">
                <h2 className="card-title">Car Name: {toyName}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>Quantity: {quantity}</p>
                <p>Seler Name: {sellerName}</p>
                <p>Seler Email: {sellerEmail}</p>
                <p>Sub Category: {subCategory}</p>
                <p>Sub Category: {subCategory}</p>
                <p className='mt-10'> {decription}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handelDelete(_id)} className="btn btn-primary">Delete</button>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyToyRow;