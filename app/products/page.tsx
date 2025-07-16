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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

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
        window.location.href = data.url;
      } else {
        alert('Failed to redirect to checkout');
      }
    } catch {
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="container mx-auto max-w-[1600px]"> {/* Wider container */}
          <h1 className="text-3xl font-bold mb-10 text-center text-slate-800">Products</h1>

          {products.length === 0 ? (
            <p className="text-xl text-center">No products available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow transition-all duration-300 hover:shadow-lg flex flex-col w-[22rem]" // Wider cards
                >
                  <div className="w-full h-56 relative">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => handleBuy(product)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 pb-0">
                    <h2 className="text-xl font-semibold text-slate-800">{product.name}</h2>
                  </div>

                  <div className="p-5 pt-3 flex-grow">
                    <p className="text-slate-800">{product.description}</p>
                  </div>

                  <div className="p-5 pt-0 flex justify-between items-center">
                    <span className="font-bold text-lg text-slate-900">
                      {(product.price / 100).toLocaleString(undefined, {
                        style: 'currency',
                        currency: product.currency.toUpperCase(),
                      })}
                    </span>

                    <button
                      onClick={() => handleBuy(product)}
                      className="inline-block py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white text-center font-medium rounded-md transition-colors"
                      disabled={loading}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="py-6 bg-white border-t">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
