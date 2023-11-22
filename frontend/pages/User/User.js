import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./Userstyles.js";
import UserNavbar from "../../components/profile/navbar/UserNavbar.js";
import UserHeader from "../../components/profile/header/UserHeader.js";

export default function User() {
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <UserNavbar />
        <UserHeader />
      </View>
    </SafeAreaView>
  );
}
