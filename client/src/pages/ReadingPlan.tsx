import { useState } from 'react';

function ReadingPlan() {
  const readings = [
    { day: 1, passage: 'Genesis 1–2' },
    { day: 2, passage: 'Genesis 3–4' },
    { day: 3, passage: 'Genesis 5–6' },
  ];

  const [completed, setCompleted] = useState<number[]>(() => {
    const saved = localStorage.getItem('completedReadings');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleComplete = (day: number) => {
    let updated: number[];
    if (completed.includes(day)) {
      updated = completed.filter((d: number) => d !== day);
    } else {
      updated = [...completed, day];
    }
    setCompleted(updated);
    localStorage.setItem('completedReadings', JSON.stringify(updated));
  };

  return (
  <div className="pt-20">
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">
        Reading Plan
      </h1>

      <ul className="space-y-4">
        {readings.map((reading) => (
          <li
            key={reading.day}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border rounded-md shadow transition ${
              completed.includes(reading.day)
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
              checked={completed.includes(reading.day)}
              onChange={() => toggleComplete(reading.day)}
              className="w-5 h-5 accent-green-600 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default ReadingPlan;
