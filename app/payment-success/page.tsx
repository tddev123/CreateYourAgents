export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams: { amount: string } | Promise<{ amount: string }>;
}) {
  // Await in case searchParams is a promise. (If it isn’t, await will simply return the value.)
  const { amount } = await searchParams;

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
