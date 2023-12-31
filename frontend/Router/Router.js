import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoDetail from "../components/VideoItem/VideoDetail";
import EditProfile from "../components/profile/edit/EditProfile";
import EditEmail from "../components/profile/edit/field/EditEmail";
import EditField from "../components/profile/edit/field/EditField";
import savePost from "../components/savePost/savePost";
import Add from "../pages/Add/Add";
import Home from "../pages/Home/Home";
import Message from "../pages/Message/Message";
import Shop from "../pages/Shop/Shop";
import User from "../pages/User/User";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" // màn hình sẽ hiển thị đầu tiên
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#000",
          padding: 5,
          justifyContent: "center",
        },
      }}
    >
      {/* các màn hình lần lượt nằm ở đây */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("../assets/new-video.png")}
              style={{ width: size + 20, height: size }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Hộp thư",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: "Hồ sơ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SavePost"
            component={savePost}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditField"
            component={EditField}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditEmail"
            component={EditEmail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VideoDetail"
            component={VideoDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Router;
