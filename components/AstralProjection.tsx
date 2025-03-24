'use client';
import Link from 'next/link';

export default function AstralProjectionHome() {
  return (
    <main className="flex justify-center items-center min-h-screen -mt-40 ">
      <Link href="/products">
        <div className="w-80 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer">
          {/* Header with label */}
          <div className="bg-purple-600 rounded-t-lg p-4 text-center">
            <h1 className="text-3xl font-bold text-white">Astral Master</h1>
            <p className="mt-2 text-lg text-white">1 hour phone call</p>
          </div>
          {/* Image Placeholder for Phone Icon */}
          <div className="flex justify-center items-center p-8">
            <div className="bg-purple-600 p-4 rounded-full">
              <img
                src="/static/images/phoneastral.png"
                alt="Phone Icon"
                className="w-24 h-24"
                style={{ mixBlendMode: 'multiply' }} // Experiment with blend mode to remove white background
              />
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}
