import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import StudentTabNavigator from './src/screens/Student/StudentTabNavigator';
import TeacherTabNavigator from './src/screens/Teacher/TeacherTabNavigator';





const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Student" component={StudentTabNavigator} />
        <Stack.Screen name="Teacher" component={TeacherTabNavigator} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}