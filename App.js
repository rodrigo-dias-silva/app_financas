import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

console.disableYellowBox = true;

import Routes from './src/routes';

import AuthProvider from './src/contexts/auth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <StatusBar style="inverted" />
      </AuthProvider>
    </NavigationContainer>
  );
}
