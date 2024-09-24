/**
 * Sample React Native App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  NativeModules,
  Button,
  Text,
  View
} from 'react-native';

import CommonInputBox from './scr/components/molecules/CommonInputBox';


const Word = () => {
  return (
    <View style={{
      flexDirection: 'column',
      flex: 1
    }}>
      <CommonInputBox hint='이름을 입력하세요.' labelName='이름' />
      <CommonInputBox hint='나이을 입력하세요.' labelName='나이' />
      <CommonInputBox hint='취미을 입력하세요.' labelName='취미' />
    </View>
  );
};

export default Word;
