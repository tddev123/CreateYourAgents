// app/api/test/route.ts
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Ensure that your STRIPE_SECRET_KEY is set
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in your environment variables.');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-01-27.acacia', // or your preferred API version
});

export async function GET() {
  try {
    // Retrieve your Stripe account details as a simple test
    const account = await stripe.accounts.retrieve();
    return NextResponse.json({ success: true, account });
  } catch (error) {
    console.error('Error testing Stripe API connection:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
