import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

const Edad = () => {

    const [nombre, setNombre] = useState<string>('')

    const [edad, setEdad] = useState<string>('')

    const [result, setResult] = useState<number>(0)
    
    const CalcularEdad = () => {
        const YearsNow = 2021
        const edadusuario = YearsNow - parseInt(edad);
        setResult(edadusuario)
    }

    return (
        <View>
            <Text>Hola</Text>
            <TextInput
                style={styles.inputs}
                placeholder='Nombre'
                onChangeText={setNombre}
            />
            <Text>Ingresa la edad</Text>
            <TextInput
                style={styles.inputs}
                placeholder='Fecha nacimiento'
                keyboardType='numeric'
                onChangeText={setEdad}
            />
            <Button
                title="Calcular edad"
                onPress={CalcularEdad}
            />
            <Text>{nombre} tu edad es de{result}</Text>
        </View>
    )
}

export default Edad

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
    text: {
        fontSize: 20,
        color: 'blue'
    }
})
