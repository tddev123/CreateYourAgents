'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string | null;
  price: number;
  currency: string;
  priceId: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log('Fetching products from /api/products...');
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setProducts(data.products);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // When the user clicks "Buy Now", send the product info to our checkout session API.
  const handleBuy = async (product: Product) => {
    setLoading(true);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: product.priceId, product }),
      });
      const data = await res.json();
      if (data.url) {
        // Redirect the user to Stripe Checkout.
        window.location.href = data.url;
      } else {
        alert('Failed to redirect to checkout');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Filter to only display the product with id 'prod_Rm8GfFhuWUuAMi'
  const filteredProducts = products.filter(
    (product) => product.id === 'prod_S8VcqTPFORK5yN'
  );

  return (
    <main className=''>
      <div className="container mx-auto p-8 -mt-20 ">
        <h1 className="text-3xl font-bold mb-10 text-center">Products</h1>
        {filteredProducts.length === 0 ? (
          <p className="text-xl">Product not available.</p>
        ) : (
          <div className="flex items-center justify-center">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2 text-center">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">
                      {(product.price / 100).toLocaleString(undefined, {
                        style: 'currency',
                        currency: product.currency.toUpperCase(),
                      })}
                    </span>
                    <button
                      onClick={() => handleBuy(product)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
