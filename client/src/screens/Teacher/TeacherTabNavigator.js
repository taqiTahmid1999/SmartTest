import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; 
import CreateExamScreen from './CreateExamScreen'; 
import StudentPerformanceScreen from '../Student/StudentPerformanceScreen'; 
import NotificationsScreen from './NotificationsScreen'; 
import SettingsScreen from './SettingsScreen'; 
import Icon from '@expo/vector-icons/Ionicons'; 
import CourseScreen from '../CourseScreen';

const Tab = createBottomTabNavigator();

const TeacherTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom" 
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
          else if (route.name === 'Course') {
            iconName = focused ? 'book' : 'book-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="CreateExam" component={CreateExamScreen} />
      <Tab.Screen name="StudentPerformance" component={StudentPerformanceScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TeacherTabNavigator;
