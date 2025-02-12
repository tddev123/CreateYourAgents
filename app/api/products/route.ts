// app/api/products/route.ts
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export async function GET() {
  try {
    // Fetch active products from Stripe
    const products = await stripe.products.list({ active: true });

    // Fetch active prices (expand the product field)
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
    });

    // Combine each product with its price (assumes one price per product)
    const productsWithPrices = products.data.map((product) => {
      const price = prices.data.find(
        (p) =>
          typeof p.product !== 'string' &&
          p.product.id === product.id
      );

      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0] || null,
        // Stripe amounts are in the smallest currency unit (e.g. cents)
        price: price?.unit_amount,
        currency: price?.currency,
        priceId: price?.id,
      };
    });

    return NextResponse.json({ products: productsWithPrices });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error retrieving products' },
      { status: 500 }
    );
  }
}
