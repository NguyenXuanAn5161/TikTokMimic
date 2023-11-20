import { ResizeMode, Video } from "expo-av";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import InfoVideoItem from "../InfoVideoItem/InfoVideoItem";
import styles from "./VideoItemStyles";

// Sử dụng forwardRef để truy cập ref từ parent component
export const VideoItem = forwardRef(({ item }, parentRef) => {
  // Sử dụng useRef để lưu trữ tham chiếu đến đối tượng Video
  const ref = useRef(null);

  // Sử dụng useImperativeHandle để chia sẻ các phương thức từ component con lên component cha
  useImperativeHandle(parentRef, () => ({ play, stop, unload }));

  // Sử dụng useEffect để thực hiện một số công việc khi component unmount
  useEffect(() => {
    return () => unload();
  }, []);

  // Phương thức play để bắt đầu phát video
  const play = async () => {
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) {
      return; // Kiểm tra nếu video đang phát thì không làm gì cả
    }
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.log(e);
    }
  };

  // Phương thức stop để dừng phát video
  const stop = async () => {
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return; // Kiểm tra nếu video không phát thì không làm gì cả
    }
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.log(e);
    }
  };

  // Phương thức unload để giải phóng tài nguyên khi component unmount
  const unload = async () => {
    console.log("unload", item.id);
    if (ref.current == null) {
      return;
    }
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.log(e);
    }
  };

  // Render component Video với các thuộc tính và phương thức đã được định nghĩa
  return (
    <>
      <InfoVideoItem item={item} />
      <Video
        ref={ref} // ref này sẽ được truyền vào parentRef ở trên
        style={styles.container}
        source={{
          uri: item.video_url,
        }}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay={true} // Không phát tự động khi mount
        isLooping // Lặp lại video
        isMuted={false}
      />
    </>
  );
});

export default VideoItem;
