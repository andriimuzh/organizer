import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import Drawer from './AppDrawer';
import AuthStack from './AuthStack';
const Stack = createStackNavigator();

export const HomeNavigator: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={screens.AppDrawer}
      options={{ headerTitle: 'Nulllllll' }}
      component={Drawer}
    />
    <Stack.Screen name={screens.AuthStack} component={AuthStack} />
  </Stack.Navigator>
);
// export default
