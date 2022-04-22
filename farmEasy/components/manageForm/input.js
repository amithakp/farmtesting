import { Text, TextInput, View, StyleSheet} from 'react-native';
 
function Input({label, textInputConfig }){

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}> {label} </Text>
            <TextInput style={styles.input} {...textInputConfig} />
        </View>
    )
}

export default Input;
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
    input: {
        fontSize: 16, 
        padding: 6, 
        borderRadius: 6,
        color: 'green', 
        borderWidth: 1,
        borderColor: 'gray'
    }
});