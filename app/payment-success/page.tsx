// app/payment-success/page.tsx
import PaymentSuccess from "@/components/PaymentSuccess";

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { amount: string };
}) {
  return <PaymentSuccess searchParams={searchParams} />;
}
