import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const Employee = () => {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const task = form.task.value;
    const hours = form.hours.value;

    const taskData = {
      email: user?.email,
      task,
      hours,
      date: selectedDate.toISOString().split("T")[0], // Format the date as "YYYY-MM-DD"
    };

    // Add Task To DB
    axiosSecure.post("/tasks", taskData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Task Added Successfully",
            icon: "success",
          });
          // Refetch item to update the data instantly
          refetch()
          form.reset();
        }
      });
  };

  // Get Task Data From DB Using TanStack Query
  const { data: tasks = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Work Sheet</h1>
      <div className="card">
        <form
          onSubmit={handleSubmit}
          className="card-body flex flex-row justify-center items-center"
        >
          {/* Task Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task</span>
            </label>
            <select name="task" className="select select-bordered" required>
              <option disabled selected>
                Select Task
              </option>
              <option>Sales</option>
              <option>Support</option>
              <option>Content</option>
              <option>Paper-work</option>
            </select>
          </div>

          {/* Hours Worked Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Hours Worked</span>
            </label>
            <input
              name="hours"
              type="number"
              placeholder="Hours Worked"
              className="input input-bordered"
              required
            />
          </div>

          {/* Date Picker Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="input input-bordered"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          {/* Add Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>

        {/* Display Total Tasks */}
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task {tasks.length}</th>
                  <th>Hours Worked</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map((item, index) => <tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.task}</td>
                    <td>{item.hours}</td>
                    <td>{item.date}</td>
                    <td>Edit Delete</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
