export default function PaymentSuccess({
  searchParams,
}: {
  searchParams: { amount: string } | Promise<{ amount: string }>;
}) {
  // You can either await searchParams (even in a non-async function via Promise.resolve)
  // or assume it is not a promise if you are sure.
  const resolvedSearchParams = Promise.resolve(searchParams);
  resolvedSearchParams.then(({ amount }) => {
    // use amount in your rendering logic
  });
  
  // Alternatively, if you are sure it is a plain object, you can simply assert its type:
  const { amount } = searchParams as { amount: string };

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-400 to-green-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>
        <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
}
