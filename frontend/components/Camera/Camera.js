import { Feather } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./CameraStyles";


export default function CameraScreen() {
  // Trạng thái truy cập cho camera, audio, gallery
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);

  const [galleryItems, setGalleryItems] = useState([]);

  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );

  const [isCameraReady, setIsCameraReady] = useState(false);
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  // Yêu cầu truy cập cho camera, audio, gallery
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");

      // Nếu có quyền truy cập thư viện, lấy danh sách ảnh và video từ thư viện
      if (galleryStatus.status == "granted") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ["creationTime"],
          mediaType: ["photo", "video"],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    })();
  }, []);

  // Ghi video khi người dùng giữ nút ghi âm
  const recordVideo = async () => {
    if (cameraRef) {
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality["480"],
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
          // Tạo thumbnail và chuyển hướng đến màn hình lưu bài đăng
          let sourceThumb = await generateThumbnail(source);
          navigation.navigate("SavePost", { source, sourceThumb });
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  // Dừng ghi video khi người dùng nhấc tay ra khỏi nút ghi âm
  const stopVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
  };

  // Chọn video từ thư viện ảnh và video
  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.cancelled) {
      // Tạo thumbnail và chuyển hướng đến màn hình lưu bài đăng
      let sourceThumb = await generateThumbnail(result.uri);
      navigation.navigate("SavePost", { source: result.uri, sourceThumb });
    }
  };

  // Tạo thumbnail từ video
  const generateThumbnail = async (source) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(source, {
        time: 5000,
      });
      return uri;
    } catch (e) {
      console.warn(e);
    }
  };

  // Nếu không có quyền truy cập camera, âm thanh, hoặc thư viện ảnh và video, hiển thị một View trống
  if (!hasCameraPermission || !hasAudioPermission || !hasGalleryPermission) {
    return <View></View>;
  }

  return (
    <View style={styles.container}>
      {isFocused ? (
        // Hiển thị camera khi màn hình được focus
        <Camera
          style={styles.camera}
          ref={(ref) => setCameraRef(ref)}
          ratio="16:9"
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}

      {/* Sidebar chứa nút chuyển đổi camera và nút bật/tắt đèn flash */}
      <View style={styles.sideBarContainer}>
        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraType(
              cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        >
          <Feather name="refresh-ccw" size={24} color={"white"} />
          <Text style={styles.iconText}>Chuyển đổi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraFlash(
              cameraFlash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            )
          }
        >
          <Feather name="zap" size={24} color={"white"} />
          <Text style={styles.iconText}>Đèn Flash</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBarContainer}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.recordButtonContainer}>
          {/* Nút ghi âm */}
          <TouchableOpacity
            disabled={!isCameraReady}
            onLongPress={() => recordVideo()}
            onPressOut={() => stopVideo()}
            style={styles.recordButton}
          />
        </View>

        <View style={{ flex: 1 }}>
          {/* Nút chọn video từ thư viện */}
          <TouchableOpacity
            onPress={() => pickFromGallery()}
            style={styles.galleryButton}
          >
            {/* Hiển thị hình ảnh đầu tiên trong thư viện */}
            {galleryItems[0] == undefined ? (
              <></>
            ) : (
              <Image
                style={styles.galleryButtonImage}
                source={{ uri: galleryItems[0].uri }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
