"use client";

import { useState, useEffect } from "react";

// Define a type for our plan
type Plan = {
  planName: string;
  price: number;
};

export default function PaymentSuccess() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    // Wrap the localStorage retrieval in a Promise
    const getSelectedPlan = (): Promise<Plan> =>
      new Promise((resolve, reject) => {
        try {
          const planData = localStorage.getItem("selectedPlan");
          if (planData) {
            resolve(JSON.parse(planData));
          } else {
            // If no plan is found, resolve with a default plan
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
        // Fallback to a default plan on error
        setSelectedPlan({ planName: "Default", price: 49.99 });
      });
  }, []);

  // Display a loading state while waiting for the Promise to resolve
  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${selectedPlan.price}
        </div>
      </div>
    </main>
  );
}
