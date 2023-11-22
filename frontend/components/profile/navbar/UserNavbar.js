import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './UserNavbarStyles'
import { Feather } from '@expo/vector-icons'

export default function UserNavbar() {
    const [currentUser, setCurrentUser] = useState("Xuan an");
  return (
    <View style={styles.container}>
        {/* nut search  */}
      <TouchableOpacity>
        <Feather name="search" size={20} />
      </TouchableOpacity>

        {/* Ten user  */}
      <Text style={styles.text}>{currentUser}</Text>

      {/* nut menu  */}
      <TouchableOpacity>
        <Feather name="menu" size={20} />
      </TouchableOpacity>
    </View>
  )
}
