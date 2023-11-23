import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './EditProfileNavbarStyles'
import { Feather } from '@expo/vector-icons'


export default function EditProfileNavbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name='arrow-left' size={24} color='black' />
      </TouchableOpacity>
    </View>
  )
}