import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import VideoItem from "../../components/VideoItem/VideoItem.js";
import VideoService from "../../services/video.js";
import styles from "./LikeVideoStyles.js";

const LikeVideo = () => {
  // Sử dụng useRef để lưu trữ tham chiếu đến các đối tượng video
  const mediaRefs = useRef([]);

  // Sử dụng useState để lưu trữ danh sách video
  const [videos, setVideos] = useState("haha");

  // Hàm lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await VideoService.videos();
        setVideos(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://655aae526981238d054da2b2.mockapi.io/trending"
  //       );
  //       const responseData = await response.json();
  //       setVideos(responseData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Hàm xử lý sự kiện khi các item trong danh sách thay đổi hiển thị
  // Hàm xử lý sự kiện khi các item trong danh sách thay đổi hiển thị
  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach((element) => {
      const cell = mediaRefs.current[element.key];
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

  // Hàm render mỗi item trong danh sách
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          {
            height: Dimensions.get("window").height - 49,
            backgroundColor: "#000",
          },
        ]}
      >
        <VideoItem
          item={item}
          // Lưu tham chiếu đến đối tượng video sử dụng useRef
          ref={(VideoItemRef) => (mediaRefs.current[item.id] = VideoItemRef)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* FlatList để hiển thị danh sách video */}
      <FlatList
        renderItem={renderItem}
        data={videos}
        windowSize={4} // Số lượng item được render cùng lúc (xem thêm trong tài liệu)
        initialNumToRender={1} // Số lượng item được render lần đầu
        maxToRenderPerBatch={2} // Số lượng item được render mỗi lần
        removeClippedSubviews={true} // Xóa các item không hiển thị
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100, // Item được xem khi nào thì play
        }}
        pagingEnabled
        keyExtractor={(item) => item.id}
        decelerationRate={"normal"}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default LiveVideo;
