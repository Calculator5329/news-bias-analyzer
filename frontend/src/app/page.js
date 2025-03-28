"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [article, setArticle] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const analyzeArticle = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "https://capstone-backend-production-8af9.up.railway.app/analyze",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: article }),
        }
      );

      if (!response.ok) throw new Error("Failed to analyze article");

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: "Failed to analyze article. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) {
    return <div className="text-center p-5">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full p-5 mt-40 text-white">
      <h1 className="text-2xl font-semibold mb-4">Political Bias Analyzer</h1>

      {/* Article Input Box */}
      <textarea
        className="w-full max-w-2xl h-40 p-4 bg-black text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your article here..."
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />

      {/* Submit Button */}
      <button
        onClick={analyzeArticle}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Text"}
      </button>

      {/* Results Section */}
      {result && (
        <div className="mt-6 p-5 w-full max-w-2xl bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg">
          {result.error ? (
            <p className="text-red-500">{result.error}</p>
          ) : (
            <>
              <h2 className="text-lg font-bold text-blue-400">Results:</h2>
              <p className="mt-2">
                <strong>Bias:</strong> {result.bias}
                <span className="ml-2 text-gray-400">
                  ({(result.confidence * 100).toFixed(2)}%)
                </span>
              </p>
              <p>
                <strong>News Integrity:</strong> {result.classification}
                <span className="ml-2 text-gray-400">
                  ({(result.fake_news_confidence * 100).toFixed(2)}% confidence)
                </span>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
