import React, { useState, useEffect } from 'react'
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
    useEffect(CalcularEdad, [edad])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hola</Text>
            <TextInput
                style={styles.inputs}
                placeholder='Nombre'
                onChangeText={setNombre}
            />
            <Text style={styles.text}>Ingresa la edad</Text>
            <TextInput
                style={styles.inputs}
                placeholder='Fecha nacimiento'
                keyboardType='numeric'
                onChangeText={setEdad}
            />
            
            {/* <Button
                title="Calcular edad"
                onPress={CalcularEdad}
            /> */}
            <Text style={styles.text}>{nombre} Tu edad es de: {result}</Text>
        </View>
    )
}

export default Edad

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#1d2329',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    text: {
        height: '30px',
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        textAlign: 'left',
    },
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#6ca0ab',
        flex: 1,
        width: '100%',
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24

    },

})
