import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToyRow from "./MyToyRow";

const MayToy = () => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        if (user?.email) {
            const url = `http://localhost:5000/carss?sellerEmail=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCars(data);
                    setLoading(false); // Set loading to false after data is fetched
                });
        }
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-3xl font-bold my-5 text-center text-white">You have added a total of {cars.length} toys</h2>
            {loading ? (
                <div className="flex justify-center items-center h-20">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
            ) : (
                <div className="overflow-x-auto w-full">
                    <div className="flex flex-col gap-10 mx-10 mb-10">
                        {cars.map(car => (
                            <MyToyRow key={car._id} car={car} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MayToy;
