import { useState } from 'react';

function QNA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('http://localhost:5000/qna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
      setQuestion('');
    } catch (error) {
      console.error('Error submitting question:', error);
      setAnswer('An error occurred while getting the answer. Please try again.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-10 mt-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">
        AI Bible Q&A
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the Bible..."
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Submit Question
        </button>
      </form>

      {loading && (
        <div className="mt-4 text-blue-500 font-semibold animate-pulse text-center">
          Loading answer...
        </div>
      )}

      {answer && (
        <div
          className={`mt-6 p-4 sm:p-6 rounded-lg border shadow-sm transition-all ${
            error
              ? 'bg-red-100 text-red-800 border-red-300'
              : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600'
          }`}
        >
          <h2 className="text-lg font-semibold mb-2">AI Response:</h2>
          <p className="text-base">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QNA;
