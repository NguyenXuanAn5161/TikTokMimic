import { ResizeMode, Video } from "expo-av";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import styles from "./VideoItemStyles";

export const VideoItem = forwardRef((props, parentRef) => {
  const ref = useRef(null);
  useImperativeHandle(parentRef, () => ({ play, stop, unload }));

  useEffect(() => {
    return () => unload();
  }, []);

  const play = async () => {
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) {
      // thuật ngữ Optional Chaining
      return;
    }
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.log(e);
    }
  };

  const stop = async () => {
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return;
    }
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.log(e);
    }
  };

  const unload = async () => {
    console.log("unload");
    if (ref.current == null) {
      return;
    }
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Video
      ref={ref}
      style={styles.container}
      source={{
        uri: "https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4",
      }}
      resizeMode={ResizeMode.CONTAIN}
      shouldPlay={true}
      isLooping
    />
  );
});

export default VideoItem;
