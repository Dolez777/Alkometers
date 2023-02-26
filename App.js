import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import {RadioButton} from "react-native-paper"


/* import ThemeSwitch from './components/ThemeSwitch';
 */import styles from './styles/style';





const BreathalyzerApp = () => {

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
}

  const calculateBAC = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const result = gender === 'male' ? gramsLeft / (weight * 0.7) : gramsLeft / (weight * 0.6);
    return result.toFixed(2);
  };
  

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
        backgroundColor="#3e3e3e"
      />
    );
  };

*/ 

 /*  const calculateOld = () => {
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
  } */ 

    <ScrollView style={styles.scrolling}>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin:50 }}>
    <Text  style={styles.text}>Weight (kg)</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType={'numeric'}
      />
      </View>
      <Text>Bottles</Text>
      <View style={{ flexDirection: 'row' }}>
        <NumericInput onPress={() => setBottles(bottles + 1)}>
          <Text>+</Text>
        </NumericInput>
        <Text>{bottles}</Text>
        <NumericInput onPress={() => setBottles(bottles - 1)}>
          <Text>-</Text>
        </NumericInput>
      </View>
      <Text>Hours</Text>
      <View style={{ flexDirection: 'row' }}>
        
        <NumericInput style={styles.button} onPress={() => setHours(hours + 1)}>
        </NumericInput>
        <Text>{hours}</Text>
        <TouchableOpacity onPress={() => setHours(hours - 1)}>
        </TouchableOpacity>
      </View> 
      <View style={{ flexDirection: 'row' }}>
     
<View>
     
    </View>
<RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}></RadioButton.Group>
<View style={styles.button}>
 <RadioButton value="Male">
  </RadioButton> 
  <Text>Male</Text>
</View>
<View style={styles.button}>
 <RadioButton value="Female">
  </RadioButton> 
  <Text>Male</Text>

</View>

     {/*  <Text>Gender</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setGender('male')}>
          <Text style={styles.text}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')}>
          <Text style={styles.text}>Female</Text>
        </TouchableOpacity>
      </View> */}
  <View>
      <TouchableOpacity onPress={calculateBAC}>
        <Text style={styles.text}>Calculate</Text>
      </TouchableOpacity>
    </View> 
    </ScrollView>
  );
};
export default BreathalyzerApp;