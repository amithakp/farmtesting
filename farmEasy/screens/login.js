import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Facebook from 'expo-facebook';
import {Ionicons } from '@expo/vector-icons'

import Home from './tabscreens/home';
// import CustomDrawer from '../components/drawer'
// console.disableYellowBox = true;

const Login = () => {

  const [isLoggedin, setLoggedinStatus] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isImageLoading, setImageLoadStatus] = useState(false);

  facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '',
      });

      const {
        type,
        token,
        // expires,
        // permissions,
        // declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            setLoggedinStatus(true);
            setUserData(data);
            console.log(data);
            // navigation.navigate('Home')
          })
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  logout = () => {
    setLoggedinStatus(false);
    setUserData(null);
    setImageLoadStatus(false);
  }

  return (
    isLoggedin ?
      userData ?
        <View style={styles.container1}>
          <Home userName={userData.name}/>
          {/* <CustomDrawer userName={userData.name}/> */}
        </View> :
        null
      :
      <View style={styles.container}>

        <TouchableOpacity style={styles.googleLoginBtn}>
          <Text style={{ color: "#121211" }}>
            <Ionicons name="md-logo-google" size={25} color="black" />
            Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={facebookLogIn}>
          <Text style={{ color: "#fff" }}>
            <Ionicons name="logo-facebook" size={25} color="white" />
            Sign in with Facebook</Text>
        </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#e9ebee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLoginBtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:205,
    fontWeight:'bold',
    marginBottom:8,
  },
  loginBtn: {
    backgroundColor: '#4267b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutBtn: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: 0
  },
  
});

export default Login;