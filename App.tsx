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

import BaseScreen from './scr/pages/BaseScreen';
import SignUp from './scr/components/pages/SignUp';

const Root = () => {

  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <View >
          <SignUp></SignUp>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default Root;
