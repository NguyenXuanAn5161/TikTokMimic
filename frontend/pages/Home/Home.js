import React from "react";
import { View } from "react-native";
import VideoItem from "../../components/VideoItem/VideoItem.js";
import styles from "./HomeStyles.js";
const Home = () => {
  return (
    <View style={styles.container}>
      <VideoItem />
    </View>
  );
};

export default Home;
