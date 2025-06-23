import { useEffect, useState } from 'react';

interface Bible {
  id: string;
  abbreviation: string;
  name: string;
}

interface Props {
  selectedBible: string;
  setSelectedBible: (id: string) => void;
}

export default function TranslationSelector({
  selectedBible,
  setSelectedBible,
}: Props) {
  const [bibles, setBibles] = useState<Bible[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bibles')
      .then((res) => res.json())
      .then((data) => {
        setBibles(data.data);
        setSelectedBible(data.data?.[0]?.id || '');
      })
      .catch((err) => console.error('Failed to load Bible list:', err))
      .finally(() => setLoading(false));
  }, [setSelectedBible]);

  return (
    <div className="my-4">
      <label htmlFor="bible" className="block text-sm font-medium mb-1">
        Select Bible Translation
      </label>
      <select
        id="bible"
        value={selectedBible}
        onChange={(e) => setSelectedBible(e.target.value)}
        className="w-full border rounded px-3 py-2 text-base bg-white dark:bg-gray-800 dark:text-white"
      >
        {loading ? (
          <option>Loading...</option>
        ) : (
          bibles.map((bible) => (
            <option key={bible.id} value={bible.id}>
              {bible.abbreviation} – {bible.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
