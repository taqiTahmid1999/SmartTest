import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Import your HomeScreen component
import CreateExamScreen from './CreateExamScreen'; // Import your CreateExamScreen component
import StudentPerformanceScreen from './StudentPerformanceScreen'; // Import your StudentPerformanceScreen component
import NotificationsScreen from './NotificationsScreen'; // Import your NotificationsScreen component
import SettingsScreen from './SettingsScreen'; // Import your SettingsScreen component
import Icon from '@expo/vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

const Tab = createBottomTabNavigator();

const TeacherTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CreateExam') {
            iconName = focused ? 'create' : 'create-outline';
          } else if (route.name === 'StudentPerformance') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CreateExam" component={CreateExamScreen} />
      <Tab.Screen name="StudentPerformance" component={StudentPerformanceScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TeacherTabNavigator;
