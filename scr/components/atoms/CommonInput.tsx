import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 8,
        flex: 1
    },
    input: {
        borderColor: 'pink',
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 8
    }
});

type InputProps = {
    hint: string;
  };

const CommonInput = (props: InputProps) => {
    const [text, setText] = useState('');

    const onChangeText = (inputText: string) => {
        setText(inputText);
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder={props.hint}
                style={styles.input}
            />
        </View>
    );
}

export default CommonInput; 