import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Signup = () => {
  const [photo, setPhoto] = useState("");

  const { register, handleSubmit, formState: { errors }, } = useForm()
  const { createUser } = useContext(AuthContext);


  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      }
      )
  }

  // const handleImageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const response = await fetch("https://api.imgbb.com/1/upload?key=4b1ab40c84363ea80473bd98398b4614", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       setPhoto(data.data.url);
  //     } else {
  //       alert("Image upload failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     alert("An error occurred during image upload.");
  //   }
  // };

  // const handleSignUp = async (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const name = form.name.value.trim();
  //   const email = form.email.value.trim();
  //   const role = form.role.value;
  //   const bankAccountNo = form.bank_account_no.value.trim();
  //   const salary = form.salary.value.trim();
  //   const designation = form.designation.value.trim();
  //   const password = form.password.value.trim();

  //   if (!photo) {
  //     alert("Please upload a photo.");
  //     return;
  //   }

  //   console.log({ name, email, role, bankAccountNo, salary, designation, photo, password });
  // };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-400">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select {...register("role")} name="role" className="select select-bordered" required>
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="HR">HR</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Bank Account No.</span>
              </label>
              <input
                {...register("bank_account_no")}
                type="text"
                placeholder="Bank Account Number"
                name="bank_account_no"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary</span>
              </label>
              <input
                {...register("salary")}
                type="number"
                placeholder="Salary"
                name="salary"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Designation</span>
              </label>
              <input
                {...register("designation")}
                type="text"
                placeholder="Designation (e.g., Sales Assistant)"
                name="designation"
                className="input input-bordered"
                required
              />
            </div>

            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input file-input-bordered"
                required
              />
            </div> */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 14,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                })}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type === 'required' && <p className="text-red-400">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-400">Password not more then 14 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-400">Password have must one upper case, one lower case, one number, one special characters</p>}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white btn-primary">
                Sign Up
              </button>
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
};

export default Signup;
