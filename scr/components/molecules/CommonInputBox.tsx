import React, { Children, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import CommonInput from '../atoms/CommonInput';
import CommonLabel from '../atoms/CommonLabel';

const styles = StyleSheet.create({
    commonBox: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type InputBoxProps = {
    hint: string,
    labelName: string,
    inputValue: string,
    inputChange: (text1: string) => void;
};

const CommonInputBox = (props: InputBoxProps) => {
    return (
        <View style={styles.commonBox} >
            <CommonLabel
                name={props.labelName}
            />
            <CommonInput
                hint={props.hint} inputValue={props.inputValue} inputChange={props.inputChange}
            />
        </View>
    );
}

export default CommonInputBox; 