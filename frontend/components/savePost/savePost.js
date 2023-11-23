import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from './savePostStyles'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function savePost(props) {
    const [requestRunning, setRequestRunning] = useState(false) 
    const [descrition, setDescrition] = useState('')
    const navigation = useNavigation();


    const handleSavePost = async () => {
        setRequestRunning(true);
      
        // Giả lập một đợi trong 2 giây
        await new Promise(resolve => setTimeout(resolve, 2000));
      
        setRequestRunning(false);
        navigation.goBack();
      };

    if(requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.inputText}
                    maxLength={150}
                    multiline
                    onChangeText={(text) => setDescrition(text)}
                    placeholder='Describe your video'
                />
                <Image 
                    style={styles.mediaPreview}
                    source={{uri: props.route.params.source}}
                />
            </View>
            <View style={styles.spacer} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.cancelButton}>
                    <Feather name='x' size={24} color="black" />
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleSavePost()}
                    style={styles.postButton}>
                    <Feather name='corner-left-up' size={24} color="white" />
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
