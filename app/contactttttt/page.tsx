// pages/contact.tsx
"use client";

import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center -mt-14 justify-center text-white text-center p-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-9 text-black drop-shadow-lg">Contact</h1>
      
      <div className="flex flex-col items-center gap-4 md:gap-6 bg-white p-6 md:p-12 rounded-2xl shadow-2xl text-gray-900 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex items-center gap-3 md:gap-4 text-xl md:text-2xl font-semibold">
          <Phone className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
          <span>7868862825</span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4 text-xl md:text-2xl font-semibold">
          <Mail className="w-8 h-8 md:w-12 md:h-12 text-red-500" />
          <span>createyouragents@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
