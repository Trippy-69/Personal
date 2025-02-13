import { useState } from "react";

export default function Maintenance() {
  const [loading, setLoading] = useState(false);

  const refreshPage = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1500); // 1.5 sec delay for effect
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
      <h1 className="text-4xl font-bold animate-pulse">🚧 Site Under Maintenance 🚧</h1>
      <p className="mt-4 text-lg">We’ll be back soon! Stay tuned.</p>
      <button
        onClick={refreshPage}
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all"
        disabled={loading}
      >
        {loading ? "Refreshing..." : "Try Again"}
      </button>
    </div>
  );
}
