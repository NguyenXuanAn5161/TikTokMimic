import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    position: "absolute",
    zIndex: 999,
    top: "45%",
    paddingHorizontal: "5%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  rightContainer: {
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 90,
    resizeMode: "contain",
  },
  info: {
    alignItems: "center",
    marginBottom: 10,
  },
  user: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 90,
    height: 50,
    width: 50,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: Dimensions.get("window").width,
    paddingLeft: 30,
  },
  musicContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 10,
    width: Dimensions.get("window").width,
  },
  musicavatar: {
    borderRadius: 90,
    height: 50,
    width: 50,
    backgroundColor: "transparent",
  },
  musicImage: {
    width: 50,
    height: 50,
    borderRadius: 90,
    resizeMode: "contain",
  },
  //   descriptionContainer: {
  //     width: Dimensions.get("window").width,
  //     paddingLeft: 30,
  //   },
  description: {
    color: "white",
    fontSize: 16,
  },
  titleusername: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default styles;
