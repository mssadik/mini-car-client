import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MayToy = () => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState([])


    useEffect(() => {
        if (user?.email) {
            const url = `http://localhost:5000/carss?sellerEmail=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setCars(data));
        }
    },[user?.email])

    return (
        <div>
            <h2>{cars.length}</h2>
        </div>
    );
};

export default MayToy;