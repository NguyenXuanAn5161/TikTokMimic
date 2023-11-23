import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './PostListItemStyles'

//lấy hình ảnh video user từ mock api
export default function PostListItem({ item }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: item.avatar}} />
    </View>
  )
}