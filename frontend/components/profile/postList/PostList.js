import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostListItem from './item/PostListItem';

// Ket noi voi mock api va hien thi danh sach cac video co trong mock api
export default function PostList() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://655f6570879575426b454270.mockapi.io/MyVideo')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View>
      <FlatList
        numColumns={3}
        removeClippedSubviews
        data={postData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostListItem item={item} />}
      />
    </View>
  );
}