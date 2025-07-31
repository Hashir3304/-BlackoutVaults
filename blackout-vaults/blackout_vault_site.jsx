// pages/index.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { loadStripe } from '@stripe/stripe-js';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (planId) => {
    setIsLoading(true);
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!stripeKey) {
      console.error("Stripe key is not set. Please define NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your .env.local file.");
      alert("Payment system not configured. Contact support.");
      setIsLoading(false);
      return;
    }

    const stripe = await loadStripe(stripeKey);
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId })
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Blackout Vaults - Your Privacy. Professionally Handled.</title>
        <meta name="description" content="Remove yourself from data brokers, leaks, and AI exposure. Get your Privacy Score & Protection Report today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 py-4 bg-gray-950 border-b border-gray-800 backdrop-blur-md">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Blackout Vaults Logo" width={160} height={40} priority className="h-8 w-auto sm:h-10" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/features" className="hover:text-yellow-400 transition">Features</Link>
          <Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
          <Link href="/order" className="hover:text-yellow-400 transition">Scan</Link>
          <Link href="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
          <Link href="/login" className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-800 transition">Login</Link>
          <Link href="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition">Sign Up</Link>
        </nav>

        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Your Privacy. <span className="text-yellow-400">Professionally Handled.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            AI-powered privacy protection from data leaks, brokers, and AI exposure. Get your personalized Privacy Score™ in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/order" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition text-center">
              Get Your Privacy Score
            </Link>
            <Link href="/pricing" className="border border-gray-600 font-medium px-6 py-3 rounded-full hover:bg-gray-900 transition text-center">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16">
            <Image src="/stripe-badge.png" alt="Stripe Secured" width={120} height={40} />
            <Image src="/hipaa-badge.png" alt="HIPAA Compliant" width={120} height={40} />
            <Image src="/gdpr-badge.png" alt="GDPR Compliant" width={120} height={40} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Complete Privacy Protection</h2>
          {/* Feature cards remain unchanged */}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          {/* Pricing cards remain unchanged */}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Take Back Your Privacy?</h2>
          <p className="text-xl text-gray-300 mb-8">Join 12,000+ people who've already removed their data from broker sites.</p>
          <Link href="/order" className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition">
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="bg-gray-950 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" alt="Blackout Vaults" width={160} height={40} />
            <p className="mt-4 text-gray-400 text-sm">Professional privacy protection powered by AI.</p>
          </div>
          {/* Footer links unchanged */}
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Blackout Vaults. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
