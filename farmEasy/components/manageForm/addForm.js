import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {MaterialIcons,Ionicons } from '@expo/vector-icons';

// import CheckBox  from 'react-native-check-box';
import Pickers from './picker';
import Input from './input';

function AddForm(){
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <ScrollView>
            <View style={styles.imageMainContainer}>
                <Ionicons name="ios-image-outline" size={34} color="black" />
                <Text> Tap to Upload Images</Text>
            </View>
            <View style={styles.imageContainer}>
                <Text style={styles.maxImagesText}>Maximum Images : 10</Text>
            </View>

            <Pickers label="Ad Type*" 
                pickerData={<Picker
                    selectedValue={selectedValue} 
                    style={styles.pickerText}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Sell" value="sell" />
                <Picker.Item label="Rent" value="rent" />
                </Picker>}
            />

            <Pickers label="Category*"  
                pickerData={<Picker
                    selectedValue={selectedValue} 
                    style={styles.pickerText}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Farm Machinery and Tools" value="farm machinery and tools" />
                <Picker.Item label="Fertilezers and Chemicals" value="fertilezers and chemicals" />
                <Picker.Item label="Seeds and Nursery" value="seeds and nursery" />
                <Picker.Item label="Other Services" value="other services" />
                </Picker>}
             />

            <Pickers label="Sub Category*"  pickerData={<Picker
                    selectedValue={selectedValue} 
                    style={styles.pickerText}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Fertilezers and Chemicals" value="fertilezers and chemicals" />
                <Picker.Item label="Seeds and Nursery" value="seeds and nursery" />
                
                <Picker.Item label="Farm Machinery and Tools" value="farm machinery and tools" />

                <Picker.Item label="Other Services" value="other services" />
                <Picker.Item label="Agri Labours" value="agri labours" />
                <Picker.Item label="Tools and Implements" value="tools and implements" />
                <Picker.Item label="Agricultural Machineries" value="agricultural machineries" />
                <Picker.Item label="Borewells" value="borewells" />
                <Picker.Item label="Harvesters" value="harvesters" />
                <Picker.Item label="JCB" value="jcb" />
                <Picker.Item label="Sprayers" value="sprayers" />
                <Picker.Item label="Tractors" value="Tractors" />
                <Picker.Item label="Transplanters" value="Transplanters" />
                <Picker.Item label="Water Tankers" value="water tankers" />
                <Picker.Item label="Transporting Vehicles" value="transporting vehicles" />
                <Picker.Item label="Other Services" value="other services" />
                </Picker>}
             />
             <Input label="Title*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Title'
            }}/>
             <Pickers label="Price Type*"  
                pickerData={<Picker
                    selectedValue={selectedValue} 
                    style={styles.pickerText}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Fixed" value="fixed" />
                <Picker.Item label="Negotiable" value="negotiable" />
                <Picker.Item label="On Call" value="on call" />
                </Picker>}
             />
             <Input label="Price*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Price'
            }}/>
            <Input label="Price Unit*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Price Unit'
            }}/>
            <Input label="Pin Code*" textInputConfig={{
                keyboardType: 'number-pad',
                placeholder: 'Pin Code'
            }}/>
            <Input label="Description*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Description'
            }}/>
            <Input label="Video URL(Optional)" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Video URL'
            }}/>
            <Text style={styles.contactInformationText}> Contact Information </Text>
            <Input label="Address*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Address'
            }}/>
            <Input label="Phone Number*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Phone Numbert'
            }}/>
            <Input label="Whatsapp Number*" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Whatsapp Number'
            }}/>
            {/* <View>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                />
                <Text>I have read and agreed to app terms and conditions.</Text>
            </View> */}
            
            <View >
                    <View style={styles.button}>
                        <Button title="Post Ad" color="green"  />
                    </View>
            </View>
        </ScrollView>
    );
}
 export default AddForm;
 const styles = StyleSheet.create({
    imageContainer: {
       alignItems: 'flex-end'
    },
    imageMainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100, 
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'grey',
        borderRadius: 1,
        marginHorizontal: 16, 
        borderRadius: 8
    },
    maxImagesText: {
        marginHorizontal: 25
    },
    pickerText: {
        color: 'green', 
    },
    contactInformationText: {
        fontSize: 20,
        fontWeight: 'bold', 
        paddingVertical: 18,
        marginHorizontal: 8
    },
    button: {
        width:100,
        marginHorizontal: 115
    }
 });