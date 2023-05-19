import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter,  } from 'react-icons/fa';

const Login = () => {
    const {signInUser, loginWithGoogle} = useContext(AuthContext);
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/'

    const handelLonin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user)

        signInUser(email, password)
        .then(result =>{
            const signedUser = result.user;
            console.log(signedUser)
            setSuccess("User login Successfull")
            setError("")
            navigate(from)
        })
        .catch(e =>{
            setError(e.message)
            setSuccess("")
        })
    }

    const handelGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(e =>{
            console.log(e.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full  text-center lg:text-left">
                    <img className="w-[500px] h-[452px] rounded-lg" src="https://i.ibb.co/5MkNZ39/logcar.jpg" alt="" />
                </div>
                <div className="w-full  card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLonin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" />
                            </div>
                            <p className="text-green-600">{success}</p>
                            <p className="text-red-500">{error}</p>
                            <div className="form-control mt-6">
                                <button to="/" className="btn btn-primary">Login</button>
                            </div>
                            <p>Dont have Account? <Link className="underline" to="/register">Retister</Link></p>
                            <h2 className="mt-5 text-xs text-center">Or login With</h2>
                            <hr />
                            <div className="flex mx-auto gap-8">
                                <FaFacebook className="text-2xl text-blue-700"></FaFacebook>
                                <FaTwitter className="text-2xl text-blue-700"></FaTwitter>
                                <FaGoogle onClick={handelGoogleLogin} className="text-2xl text-blue-700"></FaGoogle>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;