import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
