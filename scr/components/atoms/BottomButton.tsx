import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        height: 48,
        backgroundColor: "#bdbdbd",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    }
});

type CommonProps = {
    title: string,
    onPress: () => void
}
const BottomButton = (props: CommonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => { props.onPress() }}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default BottomButton;