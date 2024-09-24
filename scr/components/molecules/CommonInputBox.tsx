import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import CommonInput from '../atoms/CommonInput';
import CommonLabel from '../atoms/CommonLabel';

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

type InputBoxProps = {
    hint: string,
    labelName: string
};

const CommonInputBox = (props: InputBoxProps) => {
    return (
        <View style={styles.container}>
            <CommonLabel
                name={props.labelName}
            />
            <CommonInput
                hint={props.hint}
            />
        </View>
    );
}

export default CommonInputBox; 