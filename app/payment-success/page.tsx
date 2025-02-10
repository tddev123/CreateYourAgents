// app/payment-success/page.tsx
import PaymentSuccess from "@/components/PaymentSuccess";
import type { ParsedUrlQuery } from "querystring";

// We declare our page function as async (this is allowed even if we don’t use await)
// and we type searchParams as ParsedUrlQuery, which is what Next.js provides.
export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: ParsedUrlQuery;
}) {
  // Extract the amount from the query.
  // searchParams.amount might be string | string[] | undefined,
  // so we ensure it’s a string (defaulting to "0" if not provided).
  const amount =
    typeof searchParams.amount === "string" ? searchParams.amount : "0";

  return <PaymentSuccess searchParams={{ amount }} />;
}
