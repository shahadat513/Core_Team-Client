import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';



const Login = () => {

    const { signIn } = useContext(AuthContext); 

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        Swal.fire({
            title: "Success!",
            text: "You have signed in successfully!",
            icon: "success",
          })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 btn-primary">Log In</button>
                        </div>
                        <NavLink to="/signup">
                            <label className="label">
                                <span className="text-sm">New?</span>
                                <span className="label-text-alt link link-hover font-semibold text-blue-500"> Sign Up</span>
                            </label>
                        </NavLink>
                        <hr />
                        <div className="form-control mt-6">
                            <button type="button" className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                <i className="fa-brands fa-google text-red-600"></i> Log In With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
