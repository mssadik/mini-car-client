import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () =>{
        logOut()
        .then(result => {console.log(result)})
        .catch(e => console.log(e))
    }

    return (
        <div className="navbar bg-base-100 bg-slate-800 text-yellow-50 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="flex flex-col gap-3 text-black">
                            <Link className="" to="/">Home</Link>
                            <Link to="/allToy">All Toy</Link>
                            
                            <Link to="/addAToy">Add A Toy</Link>
                            <Link to="/register">Sign Up</Link>
                            <Link to="/blogs">Blog</Link>
                            {
                                user ? <><Link onClick={handelLogOut} to="/">Log Out</Link> <Link to="/carss">My Toy</Link></>:
                                <Link to="/login">Login</Link> 
                            }
                        </div>
                    </ul>
                </div>
                <Link to="/"><img className="w-1/2" src="https://i.ibb.co/hHMWDH2/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex gap-5">
                        <Link to="/">Home</Link>
                        <Link to="/allToy">All Toy</Link>
                        <Link to="/addAToy">Add A Toy</Link>
                        <Link to="/register">Sign Up</Link>
                        <Link to="/blogs">Blog</Link>
                        {
                                user ?  <><Link onClick={handelLogOut} to="/">Log Out</Link> <Link to="/carss">My Toy</Link></>:
                                <Link to="/login">Login</Link> 
                            }
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <h1 className="text-2xl font-bold">Mini Car World</h1>
            </div>
        </div>
    );
};

export default Navbar;