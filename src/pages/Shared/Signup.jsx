import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [photo, setPhoto] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setPhoto(data.data.url);
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred during image upload.");
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const role = form.role.value;
    const bankAccountNo = form.bank_account_no.value.trim();
    const salary = form.salary.value.trim();
    const designation = form.designation.value.trim();
    const password = form.password.value.trim();

    if (!photo) {
      alert("Please upload a photo.");
      return;
    }

    console.log({ name, email, role, bankAccountNo, salary, designation, photo, password });
  };

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
                <span className="label-text">Role</span>
              </label>
              <select name="role" className="select select-bordered" required>
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
                type="text"
                placeholder="Designation (e.g., Sales Assistant)"
                name="designation"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
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
