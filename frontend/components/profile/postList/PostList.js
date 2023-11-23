import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostListItem from './item/PostListItem';

export default function PostList() {
    const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://655f6570879575426b454270.mockapi.io/MyVideo')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array me
  
  return (
    <View>
        <FlatList 
            numColumns={3}
            removeClippedSubviews
            data={postData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (<PostListItem item={item}/>)}
        />
    </View>
  )
}