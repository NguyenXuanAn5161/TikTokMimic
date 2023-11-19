import React, { useRef } from "react";
import { Dimensions, FlatList, View } from "react-native";
import VideoItem from "../../components/VideoItem/VideoItem.js";
import styles from "./HomeStyles.js";
const Home = () => {
  const mediaRefs = useRef([]);

  const data = [1, 2, 3, 4, 5, 6];

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach((element) => {
      const cell = mediaRefs.current[element.index];
      if (cell) {
        console.log("onViewableItemsChanged", element, element.isViewable);
        if (element.isViewable) {
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

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
        <VideoItem
          ref={(VideoItemRef) => (mediaRefs.current[item] = VideoItemRef)}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        windowSize={4} // số lượng item được render cùng lúc (xem thêm trong tài liệu)
        initialNumToRender={1} // số lượng item được render lần đầu
        maxToRenderPerBatch={2} // số lượng item được render mỗi lần
        removeClippedSubviews={true} // xóa các item không hiển thị
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100, // item được xem khi nào thì play
        }}
        pagingEnabled
        keyExtractor={(item) => item}
        decelerationRate={"normal"}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default Home;
