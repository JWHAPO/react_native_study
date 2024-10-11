import React from 'react';
import { View, StyleSheet } from 'react-native';

import CommonInputBox from '../molecules/CommonInputBox';

const styles = StyleSheet.create({
    commonBox: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type InputBoxProps = {
    hint1: string,
    hint2: string,
    label1: string,
    label2: string,
    inputChange1: (text1: string) => void,
    inputChange2: (text1: string) => void;
};

const MainInput = (props: InputBoxProps) => {
    return (
        <View style={styles.commonBox} >
            <CommonInputBox
                hint={props.hint1}
                labelName={props.label1}
                inputChange={props.inputChange1}
            />
            
            <CommonInputBox
                hint={props.hint2}
                labelName={props.label2}
                inputChange={props.inputChange2}
            />
        </View>
    );
}

export default MainInput; 