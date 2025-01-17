import { NavLink } from "react-router-dom";


const Signup = () => {

    const handleSignUp = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const image = form.image.value.trim();
        const password = form.password.value.trim();

        console.log(email, password, image, name);
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Profile Image URL"
                                name="image"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 btn-primary">Sign Up</button>
                        </div>
                        <NavLink to="/login">
                            <label className="label">
                                <span className="text-sm">Already have an account?</span>
                                <span className="label-text-alt link link-hover font-semibold text-blue-500"> Log In</span>
                            </label>
                        </NavLink>
                        <hr />
                        <div className="form-control mt-6">
                            <button type="button" className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                <i className="fa-brands fa-google text-red-600"></i> Sign Up With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

