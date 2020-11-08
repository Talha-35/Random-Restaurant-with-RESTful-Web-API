import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onNewRequest()}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f48fb1',
        padding: 10,
        margin: 10,
        borderRadius: 10 ,
        marginHorizontal : 70
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize : 20 ,
        color : '#263238'
    }
})

export { Button };
