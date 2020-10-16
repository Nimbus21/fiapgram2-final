import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Main from './screens/Main';

import { UserProvider } from './contexts/UserContext';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={ Login } options={{ headerShown : false }} />
          <Stack.Screen name="Cadastro" component={ Cadastro } />
          <Stack.Screen name="Main" component={ Main } />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;