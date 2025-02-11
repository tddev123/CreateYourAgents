import Link from "next/link";
import { Check } from "lucide-react";

export default function Services() {
  // Define your plans
  const plans = [
    {
      name: "Starter",
      price: 0, // free plan
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
      price: 500, // paid plan
      description: "Ideal for growing businesses with multiple automation needs",
      features: [
        "Perfected AI Bot",
        "Complex task automation",
        "Clicking",
        "Copy & Pasting",
        "Can use ChatGPT",
        "up to 100 Action Tasks",
        "Permanent Bot Ownership",
        "Free Technical support",
      ],
      color: "bg-green-500",
    },
    {
      name: "Enterprise",
      price: 0, // price not provided so we display "Negotiable"
      description: "For large organizations requiring comprehensive AI solutions",
      features: [
        "Unlimited automated workflows",
        "Very Advanced AI model training",
        "Full system integration",
        "Free Evolution of models",
        "Lifetime Technical support",
      ],
      color: "bg-yellow-500",
    },
  ];

  // This function returns the price text based on the plan name.
  const getPriceDisplay = (plan: { name: string; price: number }) => {
    if (plan.name === "Starter") return "Free";
    if (plan.name === "Enterprise") return "Negotiable";
    return `$${plan.price}`;
  };

  // This function returns the correct link based on the plan.
  // Only the Professional plan goes to checkout; others go to the contact page.
  const getLinkHref = (plan: { name: string; price: number }) => {
    return plan.name === "Professional"
      ? `/Checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.price}`
      : "/contact";
  };

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
                  {/* Plan title */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${plan.color} text-white text-sm font-semibold py-2 px-4`}
                  >
                    {plan.name}
                  </div>

                  {/* Plan details */}
                  <div className="flex-1">
                    <p className="mt-4 flex items-baseline justify-center">
                      <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                        {getPriceDisplay(plan)}
                      </span>
                      {plan.name === "Professional" && plan.price > 0 && (
                        <span className="ml-1 text-xl font-semibold text-gray-500">one time</span>
                      )}
                    </p>
                    <p className="mt-6 text-lg text-gray-500">{plan.description}</p>

                    {/* Plan features */}
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

                  {/* Action button */}
                  <div className="mt-8 w-full">
                    <Link
                      href={getLinkHref(plan)}
                      className={`block w-full ${plan.color} border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:opacity-90 transition-opacity duration-200`}
                    >
                      Get started with {plan.name}
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