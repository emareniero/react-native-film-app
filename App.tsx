import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';
import { Screen } from 'react-native-screens';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
      {/* <FadeScreen/> */}
    </NavigationContainer>
  );
};

export default App;
