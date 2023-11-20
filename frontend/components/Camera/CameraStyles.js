import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    backgroundColor: "black",
    aspectRatio: 9 / 16, // tỷ lệ 16:9 == ratio="16:9"
  },
  bottomBarContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  recordButtonContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  recordButton: {
    borderWidth: 8,
    borderColor: "#832121",
    backgroundColor: "#ff4040",
    borderRadius: 100,
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: 50,
    height: 50,
  },
  galleryButtonImage: {
    width: 50,
    height: 50,
  },
  sideBarContainer: {
    top: 60,
    right: 0,
    marginHorizontal: 20,
    position: "absolute",
  },
  iconText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  sideBarButton: {
    alignItems: "center",
    marginBottom: 25,
  },
});

export default styles;
