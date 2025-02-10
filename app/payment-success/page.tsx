import PaymentSuccess from "@/components/PaymentSuccess";

interface PageProps {
  searchParams: { amount?: string };
}

export default function PaymentSuccessPage({ searchParams }: PageProps) {
  const amount = searchParams.amount ?? "0"; // Ensure amount is always a string

  return <PaymentSuccess searchParams={{ amount }} />;
}
