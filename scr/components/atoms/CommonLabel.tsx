import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
  text: {
      color: 'black'
  }
});

type LabelProps = {
    name: string
  };

const CommonLabel = (props: LabelProps) => {
    return (
        <View>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
  };

export default CommonLabel; 