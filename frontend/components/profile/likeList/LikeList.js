import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import LikeListItem from './item/LikeListItem';


// Ket noi voi mock api va hien thi danh sach cac video co trong mock api
export default function LikeList() {
  const [likeData, setLikeData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://655f6570879575426b454270.mockapi.io/VideoLiked');
      const data = await response.json();
      setLikeData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        numColumns={3}
        removeClippedSubviews
        data={likeData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <LikeListItem item={item} />}
      />
    </View>
  );
}