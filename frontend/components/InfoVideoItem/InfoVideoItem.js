import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "./InfoVideoItemStyles";
import { useNavigation } from "@react-navigation/native";

export default function InfoVideoItem({ item }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(item.likes);
  const navigation = useNavigation(); // Sử dụng useNavigation để lấy navigation prop

  useEffect(() => {
    console.log("InfoVideoItem: ", item.avatar);
  }, [item]);

  const handleLikePress = () => {
    console.log("Before like press - likesCount:", likesCount, "liked:", liked);
  
    if (liked) {
      updateVideoLikes(item.id, likesCount - 1);
    } else {
      updateVideoLikes(item.id, likesCount + 1);
    }
  
    // Sử dụng hàm callback của setState
    setLiked((prevLiked) => !prevLiked);
    setLikesCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  
    console.log("After like press - likesCount:", likesCount, "liked:", liked);

    // Chuyển hướng và truyền tham số video sang màn hình likePost
    navigation.navigate('likePost', { likedVideo: item });
  }

  const updateVideoLikes = (videoId, likesCount) => {
    console.log(`Updating likes for video ${videoId} to ${likesCount}`);
    // ... (rest of the function)
  };
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <View style={[styles.user, styles.info]}>
          {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.userImage} />
          ) : null}
        </View>
        <View style={[styles.likes, styles.info]}>
          <AntDesign  name={liked ? "heart" : "hearto"}
          size={40}
          color={liked ? "red" : "white"}
          onPress={handleLikePress}/>
          <Text style={{ color: "white" }}>{likesCount}</Text>
        </View>
        <View style={[styles.comments, styles.info]}>
          <FontAwesome name="commenting-o" size={40} color="white" />
          <Text style={{ color: "white" }}>
            {item.comments > 0 ? item.comments : null}
          </Text>
        </View>
        <View style={[styles.bookmarks, styles.info]}>
          <Feather name="bookmark" size={40} color="white" />
          <Text style={{ color: "white" }}>
            {item.bookmarks > 0 ? item.bookmarks : null}
          </Text>
        </View>
        <View style={[styles.shares, styles.info]}>
          <MaterialCommunityIcons name="share" size={40} color="white" />
          <Text style={{ color: "white" }}>
            {item.shares > 0 ? item.shares : "Chia sẽ"}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.musicContainer}>
          <View style={[styles.musicavatar]}>
            {item.musicavatar ? (
              <Image
                source={{ uri: item.musicavatar }}
                style={styles.musicImage}
              />
            ) : null}
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleusername}>{item.username}</Text>
              <Text style={styles.description}>
                {item.description}
                {item.caption} #{item.hastag}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
