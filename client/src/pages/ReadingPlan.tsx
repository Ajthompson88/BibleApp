function ReadingPlan() {
const readings = [
    { day: 1, passage: 'Genesis 1-2'},
    { day: 2, passage: 'Genesis 3-4'},
    { day: 3, passage: 'Genesis 5-6'},
];

return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
        <h1 className="text-2xl font-bold text-blue-700">Reading Plan</h1>
        <ul className="space-y-2">
            {readings.map((reading) => (
                <li key ={reading.day} className="p-4 border rounded shadow hover:bg-gray-100 transition">
                    <div className ="font-semibold">Day {reading.day}</div>
                    <div>{reading.passage}</div>
                </li>
            ))}
        </ul>
    </div>
)
}

export default ReadingPlan;