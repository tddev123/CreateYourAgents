// pages/index.tsx


import { ArrowRight, Bot, Clock, DollarSign } from 'lucide-react';

export default function HomeMain() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Transform Your Business</span>
                    <span className="block text-indigo-600">with Custom AI Solutions</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Automate tasks, save time, and reduce costs with AI solutions tailored specifically for your business needs.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="/contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose CreateYourAgents?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                This AI can make you or your employee's jobs easier and can potential replace employees entirely.
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                  <div className="text-indigo-600 mb-4">
                    <Bot className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Custom Solutions</h3>
                  <p className="mt-4 text-gray-500">
                    Tailored AI solutions designed specifically for your business processes and needs.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                  <div className="text-indigo-600 mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Save Time</h3>
                  <p className="mt-4 text-gray-500">
                    Automate repetitive tasks and streamline your workflows with AI assistance.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                  <div className="text-indigo-600 mb-4">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Reduce Costs</h3>
                  <p className="mt-4 text-gray-500">
                    Lower operational costs through efficient AI-powered automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}