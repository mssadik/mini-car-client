import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToy = () => {
    const cars = useLoaderData();
    console.log(cars);
    

    return (
        <div>
            <h2 className="text-3xl text-white font-bold mt-20 text-center">All toy</h2>
            <hr className="mx-40 mb-10" />
            <div className="overflow-x-auto mx-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Click</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map(car => <ToyRow key={car._id} car={car}></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;