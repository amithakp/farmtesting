//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import {MaterialIcons,Ionicons } from '@expo/vector-icons'

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import EditProfile from '../stackscreens/editProfile';

// create a component
const Profile = ({navigation}) => {
    const Stack = createNativeStackNavigator()

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                {/* <View style={styles.profileContainer}> */}
                <Text style={styles.profileText}>Profile</Text>

                <View style={styles.profileContainer}>
                    <View style={styles.profileSub}>
                        <Image
                        style={styles.profileImage}
                        source={require('../../assets/icon.png')}/>
                    </View>
                    <View style={styles.profileSub}>
                        <View style={styles.profileSubSub}>
                            <Text style={styles.userHello}>Hello</Text>
                            <Text style={styles.userName}>Amitha Karippadan</Text>
                        </View>
                    </View>
                    <Pressable style={styles.editIcon} onPress={() => navigation.navigate('Edit')}>
                        <MaterialIcons name="edit" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.dropDown}>
                <View style={styles.dropItem}>
                    <Pressable android_ripple={{color: '#d5d8de'}} onPress={() => {}}>
                        <Text style={styles.dropText}>My Home</Text>
                        {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
                    </Pressable>
                </View>
                <View style={styles.dropItem}>
                    <Pressable android_ripple={{color: '#d5d8de'}} onPress={() => {}}>
                        <Text style={styles.dropText}>Mesages</Text>
                    </Pressable>
                </View>
                <View style={styles.dropItem}>
                    <Pressable android_ripple={{color: '#d5d8de'}} onPress={() => {}}>
                        <Text style={styles.dropText}>Family Access</Text>
                    </Pressable>
                </View>
                <View style={styles.dropItem}>
                    <Pressable android_ripple={{color: '#d5d8de'}} onPress={() => {}}>
                        <Text style={styles.dropText}>Change Password</Text>
                    </Pressable>
                </View>
                <View style={styles.dropItem}>
                    <Pressable android_ripple={{color: '#d5d8de'}} onPress={() => {}}>
                        <Text style={styles.dropText}>Support</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor:'green'
    },
    profileText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10
    },
    profileContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    profileSub: {
        width:100,
        marginHorizontal: 12
    },
    profileSubSub: {
        flexDirection: 'column',
    },
    profileImage: {
        borderRadius: 70,
        width: 100,
        height: 100,
    },
    userHello: {
        color: 'white',
        paddingVertical: 10
    },
    userName: {
        color: 'white',
    },
    editIcon: {
        paddingVertical: 29,
        marginHorizontal: 50
    },
    dropDown: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    dropItem: {
        paddingVertical: 15,
    },
    dropText: {
        fontSize:18
    }
});

//make this component available to the app
export default Profile;
