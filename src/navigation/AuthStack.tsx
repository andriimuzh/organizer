import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '@screens';
import screens from './screens';

const Stack = createStackNavigator();

const AuthStack = (): React.FC => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.Login} component={Login} />
      <Stack.Screen name={screens.Register} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
