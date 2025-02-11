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
    // Function to retrieve the selected plan from localStorage
    const getSelectedPlan = (): Promise<Plan> => {
      return new Promise((resolve, reject) => {
        try {
          const planData = localStorage.getItem("selectedPlan");
          if (planData) {
            resolve(JSON.parse(planData));
          } else {
            resolve({ planName: "Default", price: 49.99 });
          }
        } catch (error) {
          reject(error);
        }
      });
    };

    getSelectedPlan()
      .then((plan) => setSelectedPlan(plan))
      .catch((error) => {
        console.error("Error retrieving selected plan:", error);
        setSelectedPlan({ planName: "Default", price: 49.99 });
      });
  }, []);

  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully purchased the {selectedPlan.planName} plan</h2>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${selectedPlan.price}
        </div>
      </div>
    </main>
  );
}
