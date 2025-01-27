import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link } from "react-router-dom";
const HR = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], isLoading, isError, error, } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        },
    });




    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
            <h1 className="text-xl font-bold mb-4 text-left">Totall Employee : {users.length}</h1>
            <div className="card">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="bg-orange-300 text-white">
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>MAKE HR</th>
                                <th>FIRE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.role}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <Link to={`/dashboard/payment/${item._id}`}><button className="btn">Pay</button></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HR;

