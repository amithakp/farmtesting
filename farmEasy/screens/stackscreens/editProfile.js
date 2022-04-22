// import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import EditForm from '../../components/manageForm/editForm';
import {Ionicons} from '@expo/vector-icons'

const EditProfile = ({navigation}) => {
    return (

            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='arrow-back' color='black' size={30} />

                        </TouchableOpacity>
                        <Text style={styles.editProfileText}>EditProfile</Text>
                        <Text style={styles.saveText}>Save</Text>
                    </View>
                    <View style={styles.profileSub}>
                        <Image
                        style={styles.profileImage}
                        source={require('../../assets/icon.png')}/>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <EditForm/>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    
    profileContainer: {
        paddingHorizontal: 20,
        paddingVertical:40,
        backgroundColor:'green'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editProfileText:{
        marginHorizontal: 90,
        fontSize:20,
        fontWeight: 'bold',
    },
    saveText: {
        // marginHorizontal:2,
        fontSize:20,
        fontWeight: 'bold',
    },
    profileSub: {
        width:100,
        padding:16,
        marginHorizontal: 12,
        marginHorizontal: 110,
    },
    profileImage: {
        borderRadius: 70,
        width: 100,
        height: 100,
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        
    },
});

export default EditProfile;