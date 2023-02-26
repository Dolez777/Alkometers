import React from 'react';
import { Button, View } from 'react-native';
import ThemeSwitch from './ThemeSwitch';

const MyButton = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View>
      <Button title="Press me" onPress={handlePress} />
      <ThemeSwitch />
    </View>
  );
};

export default MyButton;