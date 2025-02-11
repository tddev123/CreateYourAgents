"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import { LoadingSpinner } from "./loading-spinner";

// Function to store plan price for checkout
const saveSelectedPlan = (planName: string, price: number) => {
  localStorage.setItem("selectedPlan", JSON.stringify({ planName, price }));
};

export default function Services() {
  // Use a string to store the plan name currently in loading state
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      price: 0,
      description: "Perfect for small businesses just starting with AI automation",
      features: [
        "See what it can do",
        "Simple AI Bot",
        "Basic task automation",
        "Clicking",
        "Copy & Pasting",
        "20 Action Tasks",
      ],
      color: "bg-blue-500",
    },
    {
      name: "Professional",
      price: 10,
      description: "Ideal for growing businesses with multiple automation needs",
      features: [
        "Perfected AI Bot",
        "Complex task automation",
        "Clicking",
        "Copy & Pasting",
        "Can use ChatGPT",
        "Up to 100 Action Tasks",
        "Permanent Bot Ownership",
        "Free Technical Support",
      ],
      color: "bg-green-500",
    },
    {
      name: "Enterprise",
      price: 0,
      description: "For large organizations requiring comprehensive AI solutions",
      features: [
        "Unlimited automated workflows",
        "Very Advanced AI model training",
        "Full system integration",
        "Free Evolution of models",
        "Lifetime Technical Support",
      ],
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-grow">
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                Our Services & Pricing
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs and unlock the power of AI automation.
              </p>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col w-full h-full transform transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${plan.color} text-white text-sm font-semibold py-2 px-4`}
                  >
                    {plan.name}
                  </div>

                  <div className="flex-1">
                    <p className="mt-4 flex items-baseline justify-center">
                      <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                        {plan.price === 0
                          ? plan.name === "Enterprise"
                            ? "Negotiable"
                            : "Free"
                          : `$${plan.price}`}
                      </span>
                    </p>
                    <p className="mt-6 text-lg text-gray-500">{plan.description}</p>

                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className={`flex-shrink-0 ${plan.color} rounded-full p-1`}>
                            <Check className="h-5 w-5 text-white" />
                          </div>
                          <span className="ml-3 text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 w-full">
                    <button
                      onClick={async () => {
                        if (plan.price > 0) {
                          saveSelectedPlan(plan.name, plan.price);
                          setLoadingPlan(plan.name); // mark which plan is loading
                          try {
                            const res = await fetch("/api/checkout", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ planName: plan.name, price: plan.price }),
                            });
                            if (!res.ok) throw new Error("Checkout request failed");
                            const data = await res.json();

                            if (data.url) {
                              window.location.href = data.url;
                            }
                          } catch (error) {
                            console.error("Checkout error:", error);
                          } finally {
                            // If you prefer to remove loading after a successful redirect,
                            // keep in mind the user might leave the page before this runs:
                            setLoadingPlan(null);
                          }
                        }
                      }}
                      className={`flex justify-center items-center w-full ${plan.color} border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:opacity-90 transition-opacity duration-200`}
                    >
                      {loadingPlan === plan.name ? (
                        <LoadingSpinner />
                      ) : (
                        `Get started with ${plan.name}`
                      )}
                    </button>
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
