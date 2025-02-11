"use client";

import { useEffect, useState } from "react";

interface PaymentData {
  amount: number;
  payment_intent: string;
  redirect_status: string;
}

// Fetch payment details dynamically
async function fetchPaymentDetails(): Promise<PaymentData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const plan = JSON.parse(localStorage.getItem("selectedPlan") || "{}");
      resolve({
        amount: plan.price || 0,
        payment_intent: "pi_123456789", // Simulating a transaction ID
        redirect_status: "succeeded", // Mocking a success status
      });
    }, 500);
  });
}

export default function PaymentSuccess() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    fetchPaymentDetails().then((data) => setPaymentData(data));
  }, []);

  if (!paymentData) return <div>Loading payment details...</div>;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-400 to-green-600">
      <h1 className="text-4xl font-extrabold mb-2">
        {paymentData.redirect_status === "succeeded" ? "Payment Successful!" : "Payment Processing"}
      </h1>
      <h2 className="text-2xl">You successfully sent</h2>

      <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
        ${paymentData.amount}
      </div>

      {paymentData.redirect_status === "succeeded" && (
        <p className="mt-4 text-sm">Transaction ID: {paymentData.payment_intent}</p>
      )}
    </main>
  );
}
