import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./Userstyles.js";
import UserNavbar from "../../components/profile/navbar/UserNavbar.js";
import UserHeader from "../../components/profile/header/UserHeader.js";
import PostList from "../../components/profile/postList/PostList.js";
import LikeList from "../../components/profile/likeList/LikeList.js";

export default function User() {
  const [currentUser, setCurrentUser] = useState("Xuan An");
  const [contentToShow, setContentToShow] = useState("posts");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <UserNavbar currentUser={currentUser} />
        <UserHeader currentUser={currentUser} setCurrentUser={setCurrentUser} setContentToShow={setContentToShow}/>
        {contentToShow === "posts" ? <PostList /> : <LikeList />}
      </View>
    </SafeAreaView>
  );
}
