import { useLoaderData } from "react-router-dom";
import Car from "./Car";

const AllToy = () => {
    const cars = useLoaderData();
    console.log(cars);
    return (
        <div>
            <h2 className="text-3xl font-bold mt-20 text-center">All toy</h2>
            <hr className="mx-40 mb-10" />
            <div className="grid gap-5 mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                {
                    cars.map(car => <Car key={car._id} car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default AllToy;