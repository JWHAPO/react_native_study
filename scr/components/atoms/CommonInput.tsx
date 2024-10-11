import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 8
    },
    input: {
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 8
    }
});

type InputProps = {
    hint: string,
    inputChange: (text1: string) => void;
  };

const CommonInput = (props: InputProps) => {

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={props.inputChange}
                placeholder={props.hint}
                style={styles.input}
            />
        </View>
    );
}

export default CommonInput; 