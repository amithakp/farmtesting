import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';

// import CheckBox  from 'react-native-check-box';
import Input from './input';

function EditForm(){
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView>
            <Input label="User Name" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'User Name'
            }}/>
            <Input label="Email" textInputConfig={{
                keyboardType: 'email-address',
                placeholder: 'Email'
            }}/>
            <Input label="Phone" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Phone'
            }}/>
            <Input label="Gender" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Gender'
            }}/>
            <Input label="Date of Birth" textInputConfig={{
                keyboardType: 'default',
                placeholder: 'DD-MM-YYYY',
                maxLength: 10
            }}/>
        </ScrollView>
    );
}
 export default EditForm;
 const styles = StyleSheet.create({

   
});