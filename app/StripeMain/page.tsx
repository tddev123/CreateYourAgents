"use client";

import { useEffect, useState } from "react";
import CheckoutPage from "@/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeMain() {
  const [selectedPlan, setSelectedPlan] = useState<{ planName: string; price: number } | null>(null);

  useEffect(() => {
    fetch("/api/store-plan")
      .then((res) => res.json())
      .then((data) => setSelectedPlan(data))
      .catch(() => setSelectedPlan({ planName: "Default", price: 49.99 }));
  }, []);

  if (!selectedPlan) return <div>Loading...</div>;

  return (
    <main className="max-w-6xl mx-auto p-10 bg-blue-500 text-white text-center rounded-md">
      <h1 className="text-4xl font-extrabold">Payment</h1>
      <h2 className="text-2xl">You are paying for: <strong>{selectedPlan.planName}</strong></h2>
      <Elements stripe={stripePromise}>
        <CheckoutPage amount={selectedPlan.price} />
      </Elements>
    </main>
  );
}
