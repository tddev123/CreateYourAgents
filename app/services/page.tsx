
import { Check } from "lucide-react"

export default function Services() {
  const plans = [
    {
      name: "Starter",
      price: "500",
      description: "Perfect for small businesses just starting with AI automation",
      features: [
        "Custom AI Bot",
        "Basic task automation",
        "Clicking",
        "Copy & Pasting",
        "50 Action Tasks",
        "Permanent Bot Ownership",
        "No Subscription Required",
      ],
      color: "bg-blue-500",
    },
    {
      name: "Professional",
      price: "2499",
      description: "Ideal for growing businesses with multiple automation needs",
      features: [
        "Everything in Starter",
        "Advanced task automation",
        "Document processing AI",
        "Custom API integration",
        "Advanced analytics dashboard",
        "Priority support",
        "15 automated workflows",
      ],
      color: "bg-green-500",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations requiring comprehensive AI solutions",
      features: [
        "Everything in Professional",
        "Unlimited automated workflows",
        "Custom AI model training",
        "Full system integration",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom feature development",
      ],
      color: "bg-yellow-500",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
     
      <main className="flex-grow">
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Our Services & Pricing</h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs and unlock the power of AI automation
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
                      <span className="text-5xl font-extrabold tracking-tight text-gray-900">${plan.price}</span>
                      {plan.name === "Professional" ? (
                        <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                      ) : (
                        plan.price !== "Custom" && (
                          <span className="ml-1 text-xl font-semibold text-gray-500">One time</span>
                        )
                      )}
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
                    <a
                      href="/contact"
                      className={`block w-full ${plan.color} border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:opacity-90 transition-opacity duration-200`}
                    >
                      Get started with {plan.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
     
    </div>
  )
}

