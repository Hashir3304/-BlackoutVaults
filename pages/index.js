export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <img src="/logo.png" alt="Blackout Vaults Logo" className="w-32 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Your Privacy. Professionally Handled.</h1>
      <p className="max-w-xl text-center mb-6">
        Welcome to Blackout Vaults — your trusted partner in digital privacy and reputation protection. Purchase automated services below.
      </p>
      <a href="/checkout" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">Get Started</a>
    </main>
  );
}