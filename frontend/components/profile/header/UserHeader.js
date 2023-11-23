import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './UserHeaderStyles'
import { Avatar } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function UserHeader() {
  const navigation = useNavigation();
  const [email, setEmail]= useState("xuanan@gmail.com")
  return (
    <View style={styles.container}>
      <Avatar.Icon size={80} icon="account" />
      <Text style={styles.emailText}>{email}</Text>
      <View style={styles.counterContainer}>
          <View  style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Following</Text>
          </View>

          <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Followers</Text>
          </View>

          <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Likes</Text>
          </View>
      </View>
      
      <TouchableOpacity style={styles.buttonStyles}>
          <Text>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.buttonChoose}>
        <View style={styles.counterItemContainer}>
          <TouchableOpacity>
            <Feather name="bar-chart-2" size={20} />
          </TouchableOpacity>
        </View>
        

        <View style={styles.counterItemContainer}>
          <Text>|</Text>
        </View>

        <View style={styles.counterItemContainer}>
          <TouchableOpacity>
            <Feather name="heart" size={20} />
          </TouchableOpacity>
        </View>

        

        
      </View>
    </View>
  )
}