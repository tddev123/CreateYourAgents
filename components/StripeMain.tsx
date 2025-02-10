"use client"



import { useSearchParams } from "next/navigation";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import { Suspense } from "react";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Missing Stripe publishable key");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function StripeContent() {
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") ?? "Standard Plan";
  const priceParam = searchParams.get("price") ?? "0";
  const amount = parseInt(priceParam, 10) || 0;

  return (
    <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Checkout for {planName}
        </h1>
        <h2 className="text-2xl">
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}

export default function StripeHome() {
  return (
    <Suspense fallback={<div>Loading payment gateway...</div>}>
      <StripeContent />
    </Suspense>
  );
}