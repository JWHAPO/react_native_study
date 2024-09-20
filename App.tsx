/**
 * Sample React Native App
 *
 * @format
 */

import React, { useState } from 'react';
import { atom, useAtom } from 'jotai';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const counter = atom(0);

const Word = () => {

  const [count, setCounter] = useAtom(counter);
  const onAdd = () => setCounter(prev => {
    if (prev >= 10) return 0;
    return prev + 1;
  });
  const onMinus = () => setCounter(prev => {
    if (prev <= -10) return 0;
    return prev - 1;
  });
  const onReset = () => setCounter(prev => 0);

  const styles = StyleSheet.create({
    viewRoot: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    view: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      backgroundColor: 'skyblue', // 버튼 배경색상 추가
      borderRadius: 4,
      padding: 10
    },
    text: {
      fontSize: 24,
      paddingHorizontal: 20
    },
    buttonText: {
      fontSize: 18
    }
  });

  return (
    <View style={styles.viewRoot}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={onMinus}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={onAdd}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={onReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Word;
