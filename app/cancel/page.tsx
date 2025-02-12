'use client';

import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Cancelled</h1>
        <p className="mb-4">Your payment was not successful. Please try again.</p>
        <Link href="/products">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return to Products
          </button>
        </Link>
      </div>
    </div>
  );
}
