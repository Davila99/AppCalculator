import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

interface Props{
    title:string;
    defaultValue:string;
    onChangeText:(text: string) => void;
}

const FormInputs = ({title, defaultValue,onChangeText}:Props) => {
    return (
        <View>
            <Text>Ingrese {title}</Text>
            <TextInput
                style={styles.inputs}
                defaultValue={defaultValue}
                onChangeText={text  =>onChangeText(text)}
            />
        </View>
    )
}

export default FormInputs

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    }
})
