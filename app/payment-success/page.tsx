// app/payment-success/page.tsx
import PaymentSuccess from "@/components/PaymentSuccess";
import type { ParsedUrlQuery } from "querystring";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  // We’re asserting here that searchParams is what we expect.
  searchParams: ParsedUrlQuery;
}) {
  const amount =
    typeof searchParams.amount === "string" ? searchParams.amount : "0";
  // We cast our prop to match the PaymentSuccess component’s expected type.
  return <PaymentSuccess searchParams={{ amount }} />;
}
