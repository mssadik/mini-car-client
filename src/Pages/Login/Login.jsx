
const Login = () => {

    const handelLonin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img src="https://i.ibb.co/5MkNZ39/logcar.jpg" alt="" />
                </div>
                <div className="w-full lg:w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
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
                            <div className="form-control mt-6">
                                <button to="/login" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;