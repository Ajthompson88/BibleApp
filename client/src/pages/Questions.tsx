import { useEffect, useState } from 'react';

interface QuestionEntry {
  _id: string;
  question: string;
  answer?: string;
  timestamp: string;
}

export default function Questions() {
  const [questions, setQuestions] = useState<QuestionEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error('Failed to fetch questions:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-20 max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">
        Saved Bible Questions
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : questions.length === 0 ? (
        <p className="text-center text-gray-500">No saved questions yet.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((q) => (
            <li
              key={q._id}
              className="p-4 border rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="font-semibold text-lg mb-2">Q: {q.question}</div>
              {q.answer ? (
                <p className="text-base mb-1">A: {q.answer}</p>
              ) : (
                <p className="italic text-sm text-yellow-600">Awaiting answer...</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                Asked on {new Date(q.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
