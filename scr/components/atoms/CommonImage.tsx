import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 8
    },
    image: {
        width: 200,
        height: 200
    }
});

type ImageProps = {
    url: string;
  };

const CommonImage = (props: ImageProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: props.url
                }}
            />
        </View>
    );Í
}

export default CommonImage; 