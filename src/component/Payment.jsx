import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const stripePromise = loadStripe('pk_test_51Qlv7RRsrreuxbK5zfJKa9gNyr4JHhyaPBvZ1nIqO4TPUpX8KqEbgz1NRMcScJM9GslW5iOdAcMgAnQaLGDFdFcj00D9MtCZoS');

const Payment = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext); // Use `useContext` correctly
    console.log(user._id);
    const { data: payment, isLoading, isError, error } = useQuery({
        queryKey: ["payment", user?._id],
        
        enabled: !!user?._id, // Ensure the query only runs if `user._id` exists
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user._id}`);
            return res.data;
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm payment={payment} />
            </Elements>
        </div>
    );
};

export default Payment;
