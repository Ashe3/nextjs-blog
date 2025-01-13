'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { KeyboardEvent, useEffect } from 'react';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', Theme.Light);

  const toggleTheme = () =>
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);

  useEffect(() => {
    if (theme)
      document.documentElement.classList.toggle('dark', theme === Theme.Dark);
  }, [theme]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      aria-label="Switch theme"
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className="fixed top-6 right-0 md:right-4 text-3xl"
    >
      <span key={theme} aria-hidden>
        {theme === Theme.Light ? '🌑' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
