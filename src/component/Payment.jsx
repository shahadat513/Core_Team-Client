import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromiss = loadStripe('pk_test_51Qlv7RRsrreuxbK5zfJKa9gNyr4JHhyaPBvZ1nIqO4TPUpX8KqEbgz1NRMcScJM9GslW5iOdAcMgAnQaLGDFdFcj00D9MtCZoS')

const Payment = () => {
    const data= useLoaderData()
    console.log(data);
    return (
        <div>
            <Elements stripe={stripePromiss}>
                    <CheckOutForm data={data}></CheckOutForm>
                </Elements>
        </div>
    );
}

export default Payment;
