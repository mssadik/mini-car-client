import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

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
        })
        .catch(e =>{
            setError(e.message)
            setSuccess("")
        })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img src="https://i.ibb.co/5MkNZ39/logcar.jpg" alt="" />
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
                            <p>Dont have Account? <Link to="/register">Retister</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;