import { useEffect, useState } from 'react';

interface ReadingDay {
  day: number;
  passage: string;
  completed: boolean;
}

function ReadingPlan() {
  const userId = 'demo-user'; // ✅ placeholder, replace with real user later
  const [readings, setReadings] = useState<ReadingDay[]>([]);
  const [loading, setLoading] = useState(true);

  // GET reading plan from server
  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const res = await fetch(`/api/reading-plans/${userId}`);
        const data = await res.json();
        setReadings(data.plan);
      } catch (err) {
        console.error('Failed to fetch reading plan:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, []);

  // POST completion toggle to server
  const toggleComplete = async (day: number) => {
    const updated = readings.map((r) =>
      r.day === day ? { ...r, completed: !r.completed } : r
    );
    setReadings(updated); // optimistic UI update

    try {
      await fetch(`/api/reading-plans/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          day,
          completed: !readings.find((r) => r.day === day)?.completed,
        }),
      });
    } catch (err) {
      console.error('Failed to update day status:', err);
    }
  };

  return (
    <div className="pt-20">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10 min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">
          Reading Plan
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {readings.map((reading) => (
              <li
                key={reading.day}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border rounded-md shadow transition ${
                  reading.completed
                    ? 'bg-green-100 text-green-800 line-through'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div>
                  <div className="font-semibold text-lg">Day {reading.day}</div>
                  <div className="text-base">{reading.passage}</div>
                </div>

                <input
                  type="checkbox"
                  aria-label={`Toggle completion for Day ${reading.day}`}
                  checked={reading.completed}
                  onChange={() => toggleComplete(reading.day)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReadingPlan;
