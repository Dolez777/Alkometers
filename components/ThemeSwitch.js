import React, { useState } from 'react';
import { Switch } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

const ThemeSwitch = () => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  const toggleSwitch = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  if (systemTheme === null) {
    return null; // or return a loading indicator, error message, etc.
  }

  return (
    <ThemeSwitch
      value={isDarkMode}
      onValueChange={toggleSwitch}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
    />
  );
};

export default ThemeSwitch;
