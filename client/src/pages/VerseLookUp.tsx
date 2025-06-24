import { useState, useRef, useEffect } from 'react';
import TranslationSelector from '../components/TranslationSelector';

export default function VerseLookup() {
  const [selectedBible, setSelectedBible] = useState('');
  const [reference, setReference] = useState('');
  const [verse, setVerse] = useState('');
  const [displayRef, setDisplayRef] = useState('');
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement | null>(null);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerse('');
    setError('');

    try {
      const res = await fetch(
        `/api/verse/${selectedBible}/${encodeURIComponent(reference)}`
      );
      const data = await res.json();

      if (res.ok) {
        setVerse(data.text); // use 'text', not 'data.content'
        setDisplayRef(reference + ` (${selectedBible})`);
      } else {
        setError(data.error || 'Could not find verse');
      }
    } catch {
      setError('Server error');
    }
  };

  // Auto-scroll when verse content is set
  useEffect(() => {
    if (verse && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [verse]);

  return (
    <div className="pt-20 max-w-xl mx-auto px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">
        Bible Verse Lookup
      </h1>

      <TranslationSelector
        selectedBible={selectedBible}
        setSelectedBible={setSelectedBible}
      />

      <form onSubmit={handleLookup} className="space-y-4">
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="e.g. John 3:16 or John 3:16–18"
          className="w-full border rounded px-4 py-2 text-base bg-white text-black dark:bg-gray-800 dark:text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
        >
          Look Up Verse
        </button>
      </form>

      {verse && (
        <div
          ref={resultRef}
          className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-600 text-gray-900 dark:text-white shadow"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
            {displayRef}
          </div>
          <p className="text-lg whitespace-pre-line">{verse}</p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
      )}
    </div>
  );
}
