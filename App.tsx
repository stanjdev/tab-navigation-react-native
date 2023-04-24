import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from './components/Icon';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import AboutScreen from './components/AboutScreen';

import DogsStackScreen from './screens/DogsStackScreen';
import CatsStackScreen from './screens/CatsStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';
            if (route.name === 'Home') {
              iconName = focused
              ? 'home'
              : 'home-outline';
            } else if (route.name === 'Dogs') {
              iconName = focused
              ? 'paw'
              : 'paw-outline';
            } else if (route.name === 'Cats') {
              iconName = focused
              ? 'logo-octocat'
              : 'logo-octocat';
            } else if (route.name === 'About') {
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Dogs" component={DogsStackScreen} />
        <Tab.Screen name="Cats" component={CatsStackScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
