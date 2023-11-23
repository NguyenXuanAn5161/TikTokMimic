import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import styles from './EditFieldStyles'
import EditProfileNavbar from '../navbar/EditProfileNavbar'
import { Divider } from 'react-native-paper'
import { Text, TextInput, View } from 'react-native'

export default function EditField({ route }) {
  const {title, value} = route.params;
  const onSave = () => {
    console.log('Save')
  }

  return (
    <SafeAreaView style={styles.container}>
      <EditProfileNavbar leftButton={{display: true, name: 'save', action: onSave}} />
      <Divider />
      <View style={styles.mainContainer}>
          <Text style={styles.title}>{title}</Text>
          <TextInput 
          style={styles.input}
          />
      </View>
      
    </SafeAreaView>
  )
}