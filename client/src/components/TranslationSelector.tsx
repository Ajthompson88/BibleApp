import { useEffect, useState } from 'react';

interface Bible {
  id: string;
  abbreviation: string;
  name: string;
  language: {
    id: string;
    name: string;
  };
}

interface Props {
  selectedBible: string;
  setSelectedBible: (id: string) => void;
}

export default function TranslationSelector({
  selectedBible,
  setSelectedBible,
}: Props) {
  const [groupedBibles, setGroupedBibles] = useState<[string, Bible[]][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bibles')
      .then((res) => res.json())
      .then((data) => {
        const grouped: Record<string, Bible[]> = {};

        data.data.forEach((bible: Bible) => {
          const lang = bible.language.name;
          if (!grouped[lang]) grouped[lang] = [];
          grouped[lang].push(bible);
        });

        // Sort each language group
        Object.values(grouped).forEach((arr) =>
          arr.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation))
        );

        // Sort language names alphabetically
        const sorted = Object.entries(grouped).sort((a, b) =>
          a[0].localeCompare(b[0])
        );

        // Set initial default if none is selected
        if (!selectedBible && sorted.length > 0) {
          setSelectedBible(sorted[0][1][0].id);
        }

        setGroupedBibles(sorted);
      })
      .catch((err) => console.error('Failed to load Bible list:', err))
      .finally(() => setLoading(false));
  }, [selectedBible, setSelectedBible, setGroupedBibles]); // ✅ include all referenced hooks

  return (
    <div className="my-4">
      <label htmlFor="bible" className="block text-sm font-medium mb-1">
        Select Bible Translation
      </label>
      <select
        id="bible"
        value={selectedBible || ''}
        onChange={(e) => setSelectedBible(e.target.value)}
        className="w-full border rounded px-3 py-2 text-base bg-white dark:bg-gray-800 dark:text-white"
      >
        {loading ? (
          <option>Loading...</option>
        ) : (
          groupedBibles.map(([language, versions]) => (
            <optgroup key={language} label={language}>
              {versions.map((bible) => (
                <option key={bible.id} value={bible.id}>
                  {bible.abbreviation} – {bible.name}
                </option>
              ))}
            </optgroup>
          ))
        )}
      </select>
    </div>
  );
}
