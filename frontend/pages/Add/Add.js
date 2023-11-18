import React from "react";
import { View } from "react-native";
import Camera from "../../components/Camera/Camera";
import styles from "./AddStyles.js";

const Add = () => {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
};

export default Add;
