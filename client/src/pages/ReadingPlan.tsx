import {useState} from 'react';

function ReadingPlan() {
const readings = [
{ day: 1, passage: 'Genesis 1-2'},
{ day: 2, passage: 'Genesis 3-4'},
{ day: 3, passage: 'Genesis 5-6'},
];

const [completed, setCompleted] = useState<number[]>(() => {
    const saved = localStorage.getItem('completedReadings');
    return saved ? JSON.parse(saved) : [];
  });
  
  const toggleComplete = (day: number) => {
    let updated;
    if (completed.includes(day)) {
      updated = completed.filter((d: number) => d !== day);
    } else {
      updated = [...completed, day];
    }
    setCompleted(updated);
    localStorage.setItem('completedReadings', JSON.stringify(updated));
  };
  

return (
<div className="max-w-2xl mx-auto mt-8 p-4">
    <h1 className="text-2xl font-bold text-blue-700">Reading Plan</h1>
    <ul className="space-y-2">
        {readings.map((reading) => (
            <li key ={reading.day} className="p-4 border rounded shadow hover:bg-gray-100 transition">
                <div className ="font-semibold">Day {reading.day}</div>
                <div>{reading.passage}</div>
            </li>
        ))}{readings.map((reading) => (
            <li
              key={reading.day}
              className={`flex items-center justify-between p-4 border rounded shadow transition ${
                completed.includes(reading.day)
                  ? 'bg-green-100 text-green-800 line-through'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div>
                <div className="font-semibold">Day {reading.day}</div>
                <div>{reading.passage}</div>
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
)
}

export default ReadingPlan;