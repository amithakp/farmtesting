import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
 
function Pickers({label, pickerData}){


    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}> {label} </Text>
            <View style={styles.border}>
                {pickerData}
            </View>
        </View>
    )
}

export default Pickers;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 8, 
        marginVertical: 8
    },
    label: {
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 6
    },
    border: {
        fontSize: 16, 
        // padding: 6, 
        borderRadius: 6,
        borderWidth: 1,
        height: 45,
        borderColor: 'gray'
    },
   
});