import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-xs w-full bg-white rounded-xl shadow-xl -mt-36 p-6 animate-fade-in">
        {/* Success Icon */}
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-2">
            <div className="rounded-full bg-green-200 p-2">
              <div className="rounded-full bg-green-500 p-2 animate-bounce">
                <Check className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Payment Successful!</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Thank you for your purchase. Click Contact at top right and call me for further instructions.
          </p>
          <div className="bg-gray-50 rounded-lg p-3 mt-4">
            <div className="flex justify-center items-center">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">$500</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <Link 
            href="/"
            className="w-full bg-green-500 text-white py-2.5 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Back to Homepage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;