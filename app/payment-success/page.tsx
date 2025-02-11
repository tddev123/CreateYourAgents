"use client";

import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const [selectedPlan, setSelectedPlan] = useState<{ planName: string; price: number } | null>(null);

  useEffect(() => {
    fetch("/api/store-plan")
      .then((res) => res.json())
      .then((data) => setSelectedPlan(data));
  }, []);

  if (!selectedPlan) return <div>Loading...</div>;

  return (
    <main className="p-10 bg-green-500 text-white text-center">
      <h1 className="text-4xl font-extrabold">Thank You!</h1>
      <h2 className="text-2xl">You purchased the {selectedPlan.planName} plan for ${selectedPlan.price}</h2>
    </main>
  );
}
