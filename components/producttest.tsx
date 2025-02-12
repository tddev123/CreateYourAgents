// app/products/page.tsx
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
    async function fetchData() {
      try {
        // Test the API connection using the test endpoint.
        console.log('Testing API connection with /api/test...');
        const testRes = await fetch('/api/test');
        const testData = await testRes.json();
        console.log('Test endpoint response:', testData);
        if (!testRes.ok || !testData.success) {
          throw new Error('API connection test failed');
        }

        // Fetch products from the products endpoint.
        console.log('Fetching products from /api/products...');
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const data = await res.json();
        console.log('Products fetched:', data);

        if (data.error) {
          throw new Error(data.error);
        }
        setProducts(data.products);
      } catch (err: any) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {products.length === 0 ? (
        <p className="text-xl">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
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
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">
                    {(product.price / 100).toLocaleString(undefined, {
                      style: 'currency',
                      currency: product.currency.toUpperCase(),
                    })}
                  </span>
                  {/* You can add a Buy button here later */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
