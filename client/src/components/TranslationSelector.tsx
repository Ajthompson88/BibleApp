import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';


type Bible = {
  id: string;
  name: string;
  abbreviation: string;
  language: { name: string };
  description: string;
};

type GroupedBible = {
  label: string;
  options: { value: string; label: string }[];
};

interface Props {
  selectedBible: string;
  setSelectedBible: (bibleId: string) => void;
}

const TranslationSelector: React.FC<Props> = ({
  selectedBible,
  setSelectedBible,
}) => {
  const [groupedBibles, setGroupedBibles] = useState<GroupedBible[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string>('all');
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';


  // Ensure Tailwind knows which theme to apply
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Fetch bibles and group by language
  useEffect(() => {
    const fetchBibles = async () => {
      try {
        const res = await axios.get('/api/bibles');
        const bibles: Bible[] = res.data;

        // Optional filter
        const filtered = languageFilter === 'all'
          ? bibles
          : bibles.filter(b => b.language.name.toLowerCase() === languageFilter.toLowerCase());

        // Sort by language and then name
        const sorted = filtered.sort((a, b) => {
          if (a.language.name === 'English' && b.language.name !== 'English') return -1;
          if (b.language.name === 'English' && a.language.name !== 'English') return 1;
          return a.language.name.localeCompare(b.language.name) || a.name.localeCompare(b.name);
        });

        const grouped = sorted.reduce((acc: { [key: string]: GroupedBible }, bible) => {
          const lang = bible.language.name;
          if (!acc[lang]) {
            acc[lang] = { label: lang, options: [] };
          }
          acc[lang].options.push({
            value: bible.id,
            label: `${bible.abbreviation} - ${bible.name}`,
          });
          return acc;
        }, {});

        setGroupedBibles(Object.values(grouped));
      } catch (err) {
        console.error('Failed to load Bible list:', err);
      }
    };

    fetchBibles();
  }, [languageFilter]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#000000',
      borderColor: theme === 'dark' ? '#374151' : '#d1d5db',
      boxShadow: 'none',
      '&:hover': {
        borderColor: theme === 'dark' ? '#4b5563' : '#9ca3af',
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: theme === 'dark' ? '#ffffff' : '#000000',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? theme === 'dark' ? '#374151' : '#f3f4f6'
        : theme === 'dark' ? '#1f2937' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#000000',
    }),
  };

  return (
    <div className="space-y-4">
      {/* Optional language filter dropdown */}
      <select
        value={languageFilter}
        onChange={(e) => setLanguageFilter(e.target.value)}
        className="p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="all">All Languages</option>
        {Array.from(new Set(groupedBibles.map(g => g.label))).map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      {/* Bible translation selector */}
      <Select
        options={groupedBibles}
        onChange={(option) => option && setSelectedBible(option.value)}
        styles={customStyles}
        placeholder="Select Bible Translation"
        className="text-sm"
        classNamePrefix="react-select"
        value={groupedBibles
          .flatMap(group => group.options)
          .find(opt => opt.value === selectedBible) || null}
      />
    </div>
  );
};

export default TranslationSelector;
