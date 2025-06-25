import React, { useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

    const input = useRef(null);

        const updateInput = () => {
        input.current.focus();
        input.current.setNativeProps({
            fontsize: 16
        });
    };
    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter Name'
            ref={input}
                style={styles.input} />
            <TextInput placeholder='Enter Password'
                style={styles.input} />

            <Button title='Update Input' onPress={updateInput} />
        </View>
    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14
    },
    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        borderColor: '#fff'
    }


});

export default App;
