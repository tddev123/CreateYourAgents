import StripeHome from "@/components/StripeMain";
import { CheckCircle } from "lucide-react";

export default function Checkout() {
  return (
    <>
          <h1 className="text-black font-bold text-4xl text-center -mb-20 flex items-center justify-center">
      Stripe
      <CheckCircle className="ml-2 text-green-500" size={38} />
    </h1>
      <StripeHome/>
   
    </>
  );
}
