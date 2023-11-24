import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './EditProfileNavbarStyles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function EditProfileNavbar({ title= 'Edit Profile', leftButton = { display: false } }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
                      onPress={() => navigation.goBack()}>
        <Feather name='arrow-left' size={26} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.button}
                      onPress={() => leftButton.display ? leftButton.action() : null}>
        <Feather name={leftButton.name} size={26} color={leftButton.display ? 'black' : 'white'}/>
      </TouchableOpacity>
    </View>
  )
}