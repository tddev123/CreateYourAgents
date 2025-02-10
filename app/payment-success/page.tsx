import { useEffect, useState } from "react";

interface PaymentData {
  amount: string;
  payment_intent: string;
  redirect_status: string;
}

async function fetchPaymentDetails(): Promise<PaymentData> {
  // Simulating an async operation like fetching from an API or local storage
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        amount: "100", // Example default value
        payment_intent: "pi_123456789",
        redirect_status: "succeeded",
      });
    }, 1000);
  });
}

export default function PaymentSuccess() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    fetchPaymentDetails().then((data) => setPaymentData(data));
  }, []);

  if (!paymentData) {
    return (
      <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-gray-400 to-gray-600">
        <h1 className="text-4xl font-extrabold mb-2">Loading payment details...</h1>
      </main>
    );
  }

  const { amount, payment_intent, redirect_status } = paymentData;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-400 to-green-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          {redirect_status === "succeeded" ? "Payment Successful!" : "Payment Processing"}
        </h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
          ${amount}
        </div>
        
        {redirect_status === "succeeded" && (
          <p className="mt-4 text-sm">Transaction ID: {payment_intent}</p>
        )}
      </div>
    </main>
  );
}
