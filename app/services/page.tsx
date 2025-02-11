"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const saveSelectedPlan = async (planName: string, price: number) => {
  await fetch("/api/store-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ planName, price }),
  });
};

export default function Services() {
  const plans = [
    { name: "Starter", price: 0, description: "Small business AI automation", features: ["Basic automation"], color: "bg-blue-500" },
    { name: "Professional", price: 10, description: "Advanced AI automation", features: ["ChatGPT support"], color: "bg-green-500" },
    { name: "Enterprise", price: 0, description: "Full AI solutions", features: ["Custom integrations"], color: "bg-yellow-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow">
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center">Our Services & Pricing</h1>
            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div key={plan.name} className="relative bg-white p-8 shadow-lg rounded-lg">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full ${plan.color} text-white px-4 py-2`}>{plan.name}</div>
                  <p className="mt-4 text-5xl font-bold text-center">{plan.price === 0 ? "Free" : `$${plan.price}`}</p>
                  <p className="mt-6 text-lg text-gray-500 text-center">{plan.description}</p>
                  <ul className="mt-8 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href={plan.price > 0 ? "/StripeMain" : "/contact"}>
                      <button onClick={() => plan.price > 0 && saveSelectedPlan(plan.name, plan.price)} className={`w-full ${plan.color} text-white py-3 rounded-lg`}>
                        Get Started with {plan.name}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
