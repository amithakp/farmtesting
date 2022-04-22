import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { fertilizersData } from '../../data/fertilizersData';

const Fertilizers = ({ navigation, route, item }) => {
    // const { name, posted_on, author, location, price } = route.params
    const renderFertilizers = ({ item }) => {
        return (
            <Pressable style={{ width: 180, padding: 20, borderRadius: 10, overflow: 'hidden', marginRight:item.id == 1 ? 3 : 3, marginLeft: item.id == 1 ? 3 : 3, backgroundColor: 'white', elevation: 4, marginVertical: 10 }}
                onPress={() => navigation.navigate('FertilizersDetails', {
                    name: item.name,
                    price: item.price
                })}
            >
                <View style={{ height: 80, width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, elevation: 5 }} />
                <Text style={{  fontSize: 20, fontWeight: 'bold',marginTop:10}}> {item.name} </Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <View>
                        <Text> category </Text>
                    </View>

                </View>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', color: 'green' }}> {item.price} </Text>
            </Pressable> 
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.fertilizersContainer}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' color='black' size={30} />

                    </TouchableOpacity>
                    <Text style={styles.fertilizersText}>Fertilizers</Text>
                </View>
            </View>
            <View style={styles.fertilizers}>
                <FlatList
                    numColumns={2}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={fertilizersData}
                    renderItem={renderFertilizers}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fertilizersContainer: {
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:'green',
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        overflow: 'hidden'

    },
    fertilizersText:{
        marginHorizontal: 105,
        fontSize:20,
        fontWeight: 'bold',
        overflow: 'hidden'
    },
    fertilizers: {
        // paddingVertical: 20,
        // paddingHorizontal: 20,
        paddingBottom: 72,
        padding: 10,
        overflow: 'hidden',
    },
   
});

//make this component available to the app
export default Fertilizers;