// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginApp from './screens/login';
import HomeApp from './screens/home';
import ProductApp from './screens/products';
import ProductAppOne from './screens/productOne';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={
          {
            title:"Online Store",
            headerTitleAlign:"center"
          }
        } name="Login" component={LoginApp} />
        <Stack.Screen options={{
          title:"Online Store",
          headerTitleAlign:"center"
        }} name="Home" component={HomeApp} />
        <Stack.Screen name='Product' component={ProductApp} />
        <Stack.Screen name='ProductOne' component={ProductAppOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;