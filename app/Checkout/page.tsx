import { Suspense } from "react";
import StripeHome from "@/components/StripeMain";
import { CheckCircle } from "lucide-react";

export default function Checkout() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-black font-bold text-4xl text-center mb-8 flex items-center justify-center">
        Stripe Checkout
        <CheckCircle className="ml-2 text-green-500" size={38} />
      </h1>
      <Suspense fallback={<div className="text-center">Initializing payment...</div>}>
        <StripeHome />
      </Suspense>
    </div>
  );
}