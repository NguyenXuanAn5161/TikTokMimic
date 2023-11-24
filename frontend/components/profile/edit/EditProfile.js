import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import EditProfileNavbar from './navbar/EditProfileNavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './EditProfileStyle';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile({ route}) {
  const { currentUser, setCurrentUser } = route.params;

  const { email, setEmail } = route.params;
  
  
  const navigation = useNavigation();

  // Hàm để chọn ảnh từ thư viện ảnh
  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    // Xử lý kết quả sau khi chọn ảnh
    if (!result.cancelled) {
      // Thực hiện các thao tác cần thiết với ảnh đã chọn
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <EditProfileNavbar />

      {/* Phần chọn ảnh */}
      <View style={styles.imgContainer}>
        <TouchableOpacity
          style={styles.imgViewContainer}
          onPress={() => chooseImage()}
        >
          <Image
            style={styles.img}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png',
            }}
          />
          <View style={styles.imgOverLay} />
          <Feather name='camera' size={26} color='white' />
        </TouchableOpacity>
      </View>

      {/* Phần chỉnh sửa trường thông tin */}
      <View style={styles.fieldsContainer}>
        <TouchableOpacity
          style={styles.fieldItemContainer}
          onPress={() => navigation.navigate('EditField', {title: 'Display Name', value: currentUser, setCurrentUser})}
        >
          <Text>Display Name</Text>
          <View style={styles.fieldValueContainer}>
            <Text>{currentUser}</Text>
            <Feather name='chevron-right' size={20} color='gray' />
          </View>
        </TouchableOpacity>

        <View style={{marginBottom: 30}}></View>

        <TouchableOpacity
          style={styles.fieldItemContainer}
          onPress={() => navigation.navigate('EditEmail', {title: 'Display Email', value: email, setEmail})}
        >
          <Text>Email</Text>
          <View style={styles.fieldValueContainer}>
            <Text>{email}</Text>
            <Feather name='chevron-right' size={20} color='gray' />
          </View>
        </TouchableOpacity>
      </View>

       
    </SafeAreaView>
  );
}
