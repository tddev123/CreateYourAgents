import PaymentSuccess from "@/components/PaymentSuccess";

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const amount = typeof searchParams.amount === "string" ? searchParams.amount : "0";

  return <PaymentSuccess searchParams={{ amount }} />;
}
