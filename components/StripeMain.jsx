"use client";

import { useEffect, useState } from "react";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

// Ensure Stripe publishable key is defined
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeHome() {
  const [planDetails, setPlanDetails] = useState({ planName: "Unknown Plan", amount: 0 });

  useEffect(() => {
    // Simulating an async function to fetch plan details
    const fetchPlanDetails = async () => {
      try {
        const planData = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ planName: "Premium Plan", amount: 500 });
          }, 1000);
        });
        setPlanDetails(planData);
      } catch (error) {
        console.error("Failed to fetch plan details", error);
      }
    };

    fetchPlanDetails();
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Checkout for {planDetails.planName}
        </h1>
        <h2 className="text-2xl">
          <span className="font-bold"> ${planDetails.amount}</span>
        </h2>
      </div>

      <Elements 
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(planDetails.amount), // Convert dollars to cents (or your currency’s subunit)
          currency: "usd",
        }}
      >
        <CheckoutPage amount={planDetails.amount} />
      </Elements>
    </main>
  );
}