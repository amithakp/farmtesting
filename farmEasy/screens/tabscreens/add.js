//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddForm from '../../components/manageForm/addForm';

// create a component
const Add = () => {
    return (
        <View style={styles.container}>
           <AddForm/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
});

//make this component available to the app
export default Add;
