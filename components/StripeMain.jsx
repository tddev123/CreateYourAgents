"use client";

import { useSearchParams } from "next/navigation";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

// Make sure your publishable key is defined
if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeHome() {
  // Use useSearchParams to get the plan info passed from the Services page
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") || "Unknown Plan";
  // Note: price should be a numeric value; if it's "0" or "500", parsing will work correctly
  const priceParam = searchParams.get("price") || "0";
  const amount = parseInt(priceParam, 10);

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
          amount: convertToSubcurrency(amount), // Convert dollars to cents (or your currency’s subunit)
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}