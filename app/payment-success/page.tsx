"use client";

import { useEffect, useState } from "react";

interface PaymentData {
  amount: number;
  payment_intent: string;
  redirect_status: string;
}

export default function PaymentSuccess() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPaymentDetails() {
      try {
        const response = await fetch("/api/get-payment-details", { method: "GET" });

        if (!response.ok) throw new Error("Failed to fetch payment details");

        const data = await response.json();
        setPaymentData({
          amount: data.amount,
          payment_intent: data.paymentIntentId,
          redirect_status: data.redirect_status || "succeeded", // Default to success if not provided
        });
      } catch (err) {
        setError("Could not retrieve payment details.");
      } finally {
        setLoading(false);
      }
    }

    fetchPaymentDetails();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading payment details...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-400 to-green-600">
      <h1 className="text-4xl font-extrabold mb-2">
        {paymentData?.redirect_status === "succeeded" ? "Payment Successful!" : "Payment Processing"}
      </h1>
      <h2 className="text-2xl">You successfully sent</h2>

      <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
        ${paymentData?.amount}
      </div>

      {paymentData?.redirect_status === "succeeded" && (
        <p className="mt-4 text-sm">Transaction ID: {paymentData?.payment_intent}</p>
      )}
    </main>
  );
}
