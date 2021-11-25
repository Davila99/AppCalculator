import React, { useState,useEffect } from 'react'

import { StyleSheet, Text, TextInput, View, Picker, Button } from 'react-native'
import FormInputs from '../components/FormInputs'


const Calculator = () => {

    const [nombre, setNombre] = useState<string>('Pepito')

    const [num1, setNum1] = useState('0')
    const [num2, setNum2] = useState('0')
    const [result, setResult] = useState<number>(0)

    const [selectedValue, setSelectedValue] = useState('');

    const Calculardatos = () => {
        let resul
        if (selectedValue ==='multi') {
            resul = parseInt(num1) * parseInt(num2);
            setResult(resul)
        }
        if (selectedValue ==='sumar') {
            resul = parseInt(num1) + parseInt(num2);
            setResult(resul)
        }
        if (selectedValue ==='restar') {
            resul = parseInt(num1) - parseInt(num2);
            setResult(resul)
        }
        if (selectedValue ==='dividir') {
            resul = parseFloat(num1) / parseFloat(num2);
            setResult(resul)
        }
       
    }
    
    useEffect(Calculardatos, [num1, num2]);

    return (
        <View>
            <FormInputs
            title="el nombre"
            defaultValue={nombre}
            onChangeText={setNombre}
            />
            <FormInputs
            title="el primer numero"
            defaultValue={num1}
            onChangeText={setNum1}
            />

            <Picker
                selectedValue={selectedValue}
                style={{ height: '50px', backgroundColor: '#FFFFFF' }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="*" value="multi" />
                <Picker.Item label="+" value="sumar" />
                <Picker.Item label="-" value="restar" />
                <Picker.Item label="/" value="dividir" />
            </Picker>
            <FormInputs
            title="el segundo numero"
            defaultValue={num2}
            onChangeText={setNum2}
            />
            <Button title="Calcular"
                onPress={Calculardatos}
            />

            <Text style={styles.text}>{nombre} el resultado es {result.toFixed(2)}</Text>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    text:{
        
        fontSize:20,
        color: 'blue'
        
    }
})
