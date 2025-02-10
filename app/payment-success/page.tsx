


interface PaymentSuccessProps {
  searchParams: {
    amount?: string;
    payment_intent?: string;
    redirect_status?: string;
  };
}

export default function PaymentSuccess({ searchParams }: PaymentSuccessProps) {
  const amount = searchParams.amount || "0";
  const paymentStatus = searchParams.redirect_status || "unknown";

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-400 to-green-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          {paymentStatus === "succeeded" ? "Payment Successful!" : "Payment Processing"}
        </h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
          ${amount}
        </div>
        
        {paymentStatus === "succeeded" && (
          <p className="mt-4 text-sm">Transaction ID: {searchParams.payment_intent}</p>
        )}
      </div>
    </main>
  );
}