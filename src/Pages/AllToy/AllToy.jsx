import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import Spinner from "./Spinner";

const AllToy = () => {
    const cars = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    if (!cars) {
        return <Spinner />;
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCars = cars.filter((car) =>
        car.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mb-8">
            <h2 className="text-3xl text-white font-bold mt-20 text-center">All Car Here</h2>
            <div className="flex justify-center my-4">
                <input
                    type="text"
                    placeholder="Search Car Name"
                    className="border border-gray-300 px-4 py-2 rounded-md"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <hr className="mx-40 mb-10" />
            <div className="overflow-x-auto mx-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Click</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCars.map((car) => (
                            <ToyRow key={car._id} car={car}></ToyRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;
