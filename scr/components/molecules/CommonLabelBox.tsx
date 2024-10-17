import React, { Children, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import CommonLabel from '../atoms/CommonLabel';
import Alphabet from '../atoms/\bAlphabetText';

const styles = StyleSheet.create({
    commonBox: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type CommonLabelBoxProps = {
    label: string,
    description: string,
};

const CommonLabelBox = (props: CommonLabelBoxProps) => {
    return (
        <View style={styles.commonBox} >
            <CommonLabel
                name={props.label}
            />
            <Alphabet
                name={props.description} color='#bdbdbd'
            />
        </View>
    );
}

export default CommonLabelBox; 