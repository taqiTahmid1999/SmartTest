import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHomeScreen from './StudentHomeScreen'; // Import your HomeScreen component
import StudentExamsScreen from './StudentExamsScreen'; // Import your ExamsScreen component
import StudentScheduleScreen from './StudentScheduleScreen'; // Import your ScheduleScreen component
import StudentNotificationsScreen from './StudentNotificationsScreen'; // Import your NotificationsScreen component
import StudentResultsScreen from './StudentResultsScreen'; // Import your ResultsScreen component
import StudentSettingsScreen from './StudentSettingsScreen'; // Import your SettingsScreen component
import Icon from '@expo/vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

const Tab = createBottomTabNavigator();

const StudentTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Exams') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Results') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={StudentHomeScreen} />
      <Tab.Screen name="Exams" component={StudentExamsScreen} />
      <Tab.Screen name="Schedule" component={StudentScheduleScreen} />
      <Tab.Screen name="Notifications" component={StudentNotificationsScreen} />
      <Tab.Screen name="Results" component={StudentResultsScreen} />
      <Tab.Screen name="Settings" component={StudentSettingsScreen} />
    </Tab.Navigator>
  );
};

export default StudentTabNavigator;
