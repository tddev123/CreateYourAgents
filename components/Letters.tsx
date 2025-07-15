"use client"

import Image from "next/image"
import Link from "next/link"

type Letter = {
  id: string
  title: string
  description: string
  image: string
  stripeProductId: string
  buyUrl: string  // ✅ Added new property
}

const letters: Letter[] = [
  {
    id: "1",
    title: "Letter $10",
    description: "A Premade Letter From IG or Tiktok.",
    image: "/static/images/Letter.jpg",
    stripeProductId: "prod_SgVXL2cF01jjyQ",
    buyUrl: "https://checkout.stripe.com/c/pay/cs_live_a1NfWfwhb6nFlvsFQxaXr1cPuaJIgUXfQ9US0GwRHU5EBnE2K6ZDdePG82#fidkdWxOYHwnPyd1blppbHNgWjA0VHRifWBNQ3dsT31Gd3AxMUEzTjxDMmMwUkNLTWRRZGxtcGxCXzREbT1gbl1EYV9cN0tyfGtnV05nUW1rQ1ZDdGxtdjJhX0ZPRFJsd2t8YEpLbXx2PUQzNTVfPFYzczZrdicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl", // ✅ Replace with your actual URL later
  },
  {
    id: "2",
    title: "Custom Letter $20",
    description: "A Custom Letter.",
    image: "/static/images/customletter.jpg",
    stripeProductId: "prod_SgVZOePmnQsLXp",
    buyUrl: "https://checkout.stripe.com/c/pay/cs_live_a1FaJmloRxc0F8ATjiy9Y2y1v54s0gkCxP6aCPm6DqrqDmfbEmugJUdraF#fidkdWxOYHwnPyd1blppbHNgWjA0VHRifWBNQ3dsT31Gd3AxMUEzTjxDMmMwUkNLTWRRZGxtcGxCXzREbT1gbl1EYV9cN0tyfGtnV05nUW1rQ1ZDdGxtdjJhX0ZPRFJsd2t8YEpLbXx2PUQzNTVfPFYzczZrdicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl", // ✅ Replace with your actual URL later
  },
]

export default function Homeletter() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-slate-700 mb-4"></h2>
            <p className="text-black text-xl max-w-2xl mx-auto">
              Letters will be sent to wherever you want with no trace. It will be dropped off in a mail bin with no return address on it. 
              Customers info is not kept and will never be disclosed to anyone under any circumstances. I Cannot Make Custom Letters That Contain Threats.
              You can always DM me to Talk. IG & Tiktok = Whatthemail2000
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {letters.map((letter) => (
              <div
                key={letter.id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-full h-56 relative">
             <Link href={letter.buyUrl} target="_blank" rel="noopener noreferrer">
  <Image
    src={letter.image || "/placeholder.svg?height=224&width=400"}
    alt={letter.title}
    fill
    style={{ objectFit: "cover" }}
    className="transition-transform duration-300 hover:scale-105 cursor-pointer"
  />
</Link>

                </div>
                <div className="p-5 pb-0">
                  <h3 className="text-xl font-semibold text-slate-800">{letter.title}</h3>
                </div>
                <div className="p-5 pt-3">
                  <p className="text-slate-600">{letter.description}</p>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    href={letter.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white text-center font-medium rounded-md transition-colors"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 bg-white border-t">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} WhatTheMail. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
