import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import { Home } from '@screens';
const Stack = createStackNavigator();

const HomeStack = (): React.FC => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Home}
        options={{ headerTitle: 'AAAAAAAAA' }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
