import { useEffect, useState } from 'react';

export default function TranslationSelector() {
  const [bibles, setBibles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bibles')
      .then((res) => res.json())
      .then((data) => setBibles(data.data))
      .catch((err) => console.error('Error loading Bible list:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="my-4">
      <label htmlFor="bible" className="block text-sm font-medium mb-1">
        Select a Bible Translation
      </label>
      <select
        id="bible"
        className="w-full border rounded px-3 py-2 text-base bg-white dark:bg-gray-800 dark:text-white"
      >
        {loading ? (
          <option>Loading...</option>
        ) : (
          bibles.map((bible: any) => (
            <option key={bible.id} value={bible.id}>
              {bible.abbreviation} – {bible.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
