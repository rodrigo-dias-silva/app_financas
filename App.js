import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

console.disableYellowBox = true;

import Routes from './src/routes';

import AuthProvider from './src/contexts/auth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <StatusBar barStyle='light-content' backgroundColor='#131313' />
      </AuthProvider>
    </NavigationContainer>
  );
}
