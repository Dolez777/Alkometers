import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import NumericInput from 'react-native-numeric-input';import { RadioButton } from 'react-native-paper';
import styles from './styles/style';


const BACCalculator = () => {
  const [bottles, setBottles] = useState(0);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('');
  const [result, setResult] = useState(0);

  const GenderRadioGroup = ({ gender, onGenderChange }) => {
    return (
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }}>Gender:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => onGenderChange('male')}
          />
          <Text style={{ marginRight: 20 }}>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => onGenderChange('female')}
          />
          <Text>Female</Text>
        </View>
      </View>
    );
  };
  
  


  const calculateBAC = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const result = gender === 'male' ? gramsLeft / (weight * 0.7) : gramsLeft / (weight * 0.6);
    return result.toFixed(2);
  };

  return (
    <ScrollView style={styles.scrolling}>
    <View style={styles.container}>

      <View>
        <Text>Bottles</Text>
        <NumericInput
          value={bottles}
          onChange={setBottles}
          minValue={0}
        />
      </View>
      <View>
        <Text>Weight (kg)</Text>
        <NumericInput
          value={weight}
          onChange={setWeight}
          minValue={0}
        />
      </View>
      <View>
        <Text>Time (hours since first drink)</Text>
        <NumericInput
          value={time}
          onChange={setTime}
          minValue={0}
        />
      </View>
     
      <View>
      
    </View>
      <GenderRadioGroup gender={gender} onGenderChange={setGender} />
      <TouchableOpacity onPress={calculateBAC} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: 'red' }}>Calculate</Text>
      </TouchableOpacity>
      {result > 0 && (
        
          <Text style={styles.text}>Blood alcohol level: {result}</Text>
          
        
      )}
      <Text>Blood Alcohol Level: {calculateBAC()}</Text>
        
      </View>
      
    

    </ScrollView>
  );
};

export default BACCalculator;