// Blackout Vaults Full Advanced Website (Next.js + Stripe + Firebase)
// Updated to fix SSR compatibility issue

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Blackout Vaults - Your Privacy. Professionally Handled.</title>
        <meta
          name="description"
          content="Remove yourself from data brokers, leaks, and AI exposure. Get your Privacy Score & Protection Report today."
        />
      </Head>

      {/* Header Navigation */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-950 border-b border-gray-800">
        <h1 className="text-xl font-bold text-yellow-400">Blackout Vaults</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/checkout">Plans</Link>
          <Link href="/order">Start Scan</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 text-center px-6">
        <h2 className="text-4xl sm:text-6xl font-bold">
          Your Privacy. <span className="text-yellow-400">Professionally Handled.</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          AI-powered privacy protection from data leaks, brokers, AI exposure & more. Get your Privacy Score now.
        </p>
        <Link href="/order">
          <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* What You Get Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">What You Get</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          <li className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            ✅ AI Privacy Score™ Report
            <br />✅ Data Leak Detection
            <br />✅ Broker Opt-Outs
          </li>
          <li className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            ✅ Online Reputation Audit
            <br />✅ Identity Removal Requests
            <br />✅ PDF Report to Your Email
          </li>
          <li className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            ✅ WhatsApp Delivery Option
            <br />✅ Ongoing Privacy Monitoring
            <br />✅ Access to Expert Chatbot
          </li>
        </ul>
      </section>

      {/* Secure Checkout */}
      <section className="py-20 px-6 text-center bg-black">
        <h3 className="text-3xl font-bold mb-8">Secure Checkout</h3>
        <Link href="/checkout">
          <button className="bg-green-500 px-6 py-3 text-white rounded-full font-bold hover:bg-green-400">
            Order Your Privacy Report
          </button>
        </Link>
        <p className="mt-4 text-sm text-gray-400">
          Stripe-powered secure payment. Delivered in 24–48 hours.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center text-gray-500 text-sm py-10 px-4">
        © 2025 Blackout Vaults. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms</Link>
      </footer>
    </main>
  );
}
