"use client";

import { useEffect, useState, Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "./CheckoutPage";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Missing Stripe publishable key");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

async function getSelectedPlan() {
  return new Promise<{ planName: string; price: number }>((resolve) => {
    setTimeout(() => {
      const storedPlan = JSON.parse(localStorage.getItem("selectedPlan") || "{}");
      resolve(storedPlan);
    }, 500);
  });
}

function StripeContent() {
  const [plan, setPlan] = useState<{ planName: string; price: number } | null>(null);

  useEffect(() => {
    getSelectedPlan().then(setPlan);
  }, []);

  if (!plan) {
    return <div>Loading checkout details...</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md">
      <h1 className="text-4xl font-extrabold mb-2">Checkout for {plan.planName}</h1>
      <h2 className="text-2xl">${plan.price}</h2>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(plan.price),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={plan.price} />
      </Elements>
    </main>
  );
}

export default function StripeHome() {
  return <Suspense fallback={<div>Loading payment gateway...</div>}><StripeContent /></Suspense>;
}
