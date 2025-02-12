import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { priceId, product } = body;

    if (!priceId || !product) {
      return NextResponse.json(
        { error: 'Price ID and product data are required' },
        { status: 400 }
      );
    }

    const origin = request.headers.get('origin');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        product_id: product.id,
        product_name: product.name,
        product_price: product.price.toString(),
        product_currency: product.currency,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
