// pages/services.tsx
import { Navigation, Footer } from '@/components/Layout';
import { Check } from 'lucide-react';

export default function Services() {
  const plans = [
    {
      name: 'Starter',
      price: '999',
      description: 'Perfect for small businesses just starting with AI automation',
      features: [
        'Custom AI chatbot',
        'Basic task automation',
        'Email response automation',
        '5 automated workflows',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '2499',
      description: 'Ideal for growing businesses with multiple automation needs',
      features: [
        'Everything in Starter',
        'Advanced task automation',
        'Document processing AI',
        'Custom API integration',
        'Advanced analytics dashboard',
        'Priority support',
        '15 automated workflows'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations requiring comprehensive AI solutions',
      features: [
        'Everything in Professional',
        'Unlimited automated workflows',
        'Custom AI model training',
        'Full system integration',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom feature development'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow">
        <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Our Services & Pricing
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Choose the perfect plan for your business needs
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                    <p className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-extrabold tracking-tight">
                        ${plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      )}
                    </p>
                    <p className="mt-6 text-gray-500">{plan.description}</p>

                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex">
                          <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                          <span className="ml-3 text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
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
  );
}