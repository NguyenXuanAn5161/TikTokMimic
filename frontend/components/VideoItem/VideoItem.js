import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import styles from "./VideoItemStyles";

export default function VideoItem() {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          { flex: 1, height: Dimensions.get("window").height - 49 },
          index % 2
            ? { backgroundColor: "green" }
            : { backgroundColor: "gray" },
        ]}
      >
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        pagingEnabled
        keyExtractor={(item) => item}
        decelerationRate={"normal"}
      />
    </View>
  );
}
