import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import savePost from '../components/savePost/savePost';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RouterStack() {
const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="SavePost" component={savePost} />
        </stack.Navigator>
    </NavigationContainer>
  )
}