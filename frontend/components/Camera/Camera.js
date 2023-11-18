import { Audio } from "expo-av";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function CameraScreen() {
  // status truy cập cho camera, audio, gallery
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);

  // yêu cầu truy cập cho camera, audio, gallery
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);
  return (
    <View>
      <Text>Camera</Text>
    </View>
  );
}
