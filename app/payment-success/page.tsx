// app/payment-success/page.tsx
import PaymentSuccess from "@/components/PaymentSuccess";

// Here we define the type for searchParams as a plain object.
export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const amount =
    typeof searchParams.amount === "string" ? searchParams.amount : "0";
  return <PaymentSuccess searchParams={{ amount }} />;
}
