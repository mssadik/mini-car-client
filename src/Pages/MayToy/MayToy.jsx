import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToyRow from "./MyToyRow";

const MayToy = () => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('asc'); // Add sort state and default to 'asc'

    useEffect(() => {
        if (user?.email) {
            const url = `https://test-two-sigma-13.vercel.app/carss?sellerEmail=${user.email}&sort=${sort}`;
            setLoading(true);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCars(data);
                    setLoading(false);
                });
        }
    }, [user?.email, sort]); // Include sort as a dependency

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold my-5 text-center text-white">You have added total of {cars.length} toys</h2>
            <div className="flex justify-center mb-5">
                <label className="text-white mr-2">Sort by price:</label>
                <select value={sort} onChange={handleSortChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
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
