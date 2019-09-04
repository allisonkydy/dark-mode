import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = initialValue => {
  // set up state and local storage key
  const [isDark, setIsDark] = useLocalStorage('isDark', initialValue);
  
  // add class to body via DOM
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (isDark) {
      body.classList.add('dark-mode');
    }
    else {
      body.classList.remove('dark-mode');
    }
  }, [isDark])

  return [ isDark, setIsDark ];
}
