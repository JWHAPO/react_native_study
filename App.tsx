/**
 * Sample React Native App
 *
 * @format
 */

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, Store } from './modules/redux/Store';
import {
  NativeModules,
  Button,
  Text,
  View
} from 'react-native';

import TemplateReduxScreen from './scr/screen/TemplateReduxScreen';

import CommonInputBox from './scr/components/molecules/CommonInputBox';
import BottomButton from './scr/components/atoms/BottomButton';

import Alphabet from './scr/components/atoms/\bAlphabetText';

const Root = () => {
  let text1 = '';
  let text2 = '';
  let text3 = '';

  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <View >
          <TemplateReduxScreen></TemplateReduxScreen>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default Root;
