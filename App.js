import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalStyles } from './colors/colors'
import MobileList from './screens/MobileList';
import MobileDetails from './screens/MobileDetails';
import Cart from './screens/Cart';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './store/store';

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <>
          <StatusBar backgroundColor={GlobalStyles.colors.primary700} />
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500
            }
          }
          }>
            <Stack.Screen name='MobileList' component={MobileList} />
            <Stack.Screen name='MobileDetails' component={MobileDetails} />
            <Stack.Screen name='Cart' component={Cart} />
          </Stack.Navigator>
        </>
      </NavigationContainer>
    </Provider>
  )
}
