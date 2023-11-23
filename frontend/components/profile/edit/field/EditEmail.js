import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './EditFieldStyles'
import EditProfileNavbar from '../navbar/EditProfileNavbar'
import { Divider } from 'react-native-paper'
import { Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function EditField({ route }) {
  const {title, value, setEmail} = route.params;
  const [inputValue, setInputValue] = useState(value);
  const navigation = useNavigation();

  const onSave = () => {
    console.log('Save');
    setEmail(inputValue);
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <EditProfileNavbar leftButton={{display: true, name: 'save', action: onSave}} />
      <Divider />
      <View style={styles.mainContainer}>
          <Text style={styles.title}>{title}</Text>
          <TextInput 
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          />
      </View>
      
    </SafeAreaView>
  )
}