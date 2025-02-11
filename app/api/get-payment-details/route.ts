import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(req: NextRequest) {
  try {
    // Normally, you'd get this from your database or request query
    const paymentIntentId = "pi_123456789"; // Replace with dynamic retrieval

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return NextResponse.json({
      amount: paymentIntent.amount / 100, // Convert cents to dollars
      paymentIntentId: paymentIntent.id,
      redirect_status: paymentIntent.status,
    });
  } catch (error) {
    console.error("Error fetching payment details:", error);
    return NextResponse.json({ error: "Failed to fetch payment details" }, { status: 500 });
  }
}
