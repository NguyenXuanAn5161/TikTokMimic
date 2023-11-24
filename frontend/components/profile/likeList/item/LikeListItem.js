import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './LikeListItemStyles'
import { useNavigation } from '@react-navigation/native';

//lấy hình ảnh video user từ mock api
export default function LikeListItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate("VideoDetail", { videoUrl: item.video_url })}>
      <Image 
        style={styles.image}
        source={{ uri: item.avatar}} />
    </TouchableOpacity>
  )
}