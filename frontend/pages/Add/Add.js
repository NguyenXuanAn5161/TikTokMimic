import React from "react";
import { SafeAreaView, View } from "react-native";
import Camera from "../../components/Camera/Camera";
import styles from "./AddStyles.js";

const Add = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Camera />
      </View>
    </SafeAreaView>
  );
};

export default Add;
