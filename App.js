import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native';

//import color  from "./colors/color";
import ThemeSwitch from './components/ThemeSwitch';
//import {style} from './styles/style';

const BreathalyzerApp = () => {

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');

  /** const ThemeSwitch = () => {
    const systemTheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');
  
    const toggleSwitch = () => {
      setIsDarkMode((previousState) => !previousState);
    };
  
    if (systemTheme === null) {
      return null; // or return a loading indicator, error message, etc.
    }
  
  
      <Switch
        value={isDarkMode}
        onValueChange={toggleSwitch}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
    );
  };

*/ 

  const calculate = () => {
    const grams = bottles * 4.8;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * hours);
    let result = 0;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0) {
      result = 0;
    }
    alert(`Your blood alcohol level is ${result.toFixed(2)}`);
  }


  return (
    <ScrollView style={style.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin:50 }}>
      <Text style={style.text}>Weight (kg)</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType={'numeric'}
      />
      
      <Text>Bottles</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setBottles(bottles + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{bottles}</Text>
        <TouchableOpacity onPress={() => setBottles(bottles - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <Text>Hours</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setHours(hours + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{hours}</Text>
        <TouchableOpacity onPress={() => setHours(hours - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <Text>Gender</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setGender('male')}>
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')}>
          <Text>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={calculate}>
        <Text>Calculate</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
