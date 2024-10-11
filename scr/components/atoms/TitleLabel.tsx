import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
  text: {
      color: 'black',
      fontSize: 24
  }
});

type LabelProps = {
    label: string
  };

const CommonLabel = (props: LabelProps) => {
    return (
        <View>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    );
  };

export default CommonLabel; 