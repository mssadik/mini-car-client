import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";


const Register = () => {
    const { creatcUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = { name, email, password, photo };
        console.log(user);

        creatcUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(e => {
                console.log(e.message);
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 text-center ">
                    <img src="https://i.ibb.co/5MkNZ39/logcar.jpg" alt="" />
                </div>
                <div className="w-full card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button to="/register" className="btn btn-primary">
                                    Register
                                </button>
                                <p>Already Have An Account <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
