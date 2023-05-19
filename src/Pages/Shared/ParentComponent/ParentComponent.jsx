import { useState } from "react";
import Register from "../../Register/Register";
import Navbar from "../Navbar/Navbar";

const ParentComponent = () => {
    const [photo, setPhoto] = useState("");
    
    return (
        <div>
            <Navbar photo={photo}></Navbar>
            <Register setPhoto={setPhoto}></Register>
        </div>
    );
};

export default ParentComponent;