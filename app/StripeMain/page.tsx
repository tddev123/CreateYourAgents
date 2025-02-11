"use client";

import { useEffect, useState } from "react";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Ensure that the environment variable name matches your .env.local key
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Define a TypeScript type for our plan
type Plan = {
  planName: string;
  price: number;
};

export default function StripeMain() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    // Create a promise to get the selected plan from localStorage
    const getSelectedPlan = (): Promise<Plan> =>
      new Promise((resolve, reject) => {
        try {
          const planData = localStorage.getItem("selectedPlan");
          if (planData) {
            resolve(JSON.parse(planData));
          } else {
            // Option 1: Reject the promise if no plan is stored...
            // reject(new Error("No plan selected"));

            // Option 2: Resolve with a default plan if none is found
            resolve({ planName: "Default", price: 49.99 });
          }
        } catch (error) {
          reject(error);
        }
      });

    getSelectedPlan()
      .then((plan) => {
        setSelectedPlan(plan);
      })
      .catch((error) => {
        console.error("Error retrieving selected plan:", error);
        // Fallback to a default plan in case of error
        setSelectedPlan({ planName: "Default", price: 49.99 });
      });
  }, []);

  // Render a loading state until the plan is retrieved
  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
        <h2 className="text-2xl">
          has requested <span className="font-bold">${selectedPlan.price}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          // Convert the plan price (in dollars) to sub-currency (e.g., cents)
          amount: convertToSubcurrency(selectedPlan.price),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={selectedPlan.price} />
      </Elements>
    </main>
  );
}
