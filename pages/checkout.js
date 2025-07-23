export default function Checkout() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-4">Secure Checkout</h1>
      <p className="mb-6">Proceed to payment via Stripe.</p>
      <a href="https://buy.stripe.com/test_a1b2c3d4e5f6g7h8" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
        Pay Now
      </a>
    </main>
  );
}