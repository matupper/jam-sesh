import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeFeed from '../pages/HomeFeed';
import Profile from '../pages/Profile';
import PostCreation from '../pages/PostCreation';
import SearchFilter from '../pages/SearchFilter';
import Notifications from '../pages/Notifications';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = 'ellipse';
        switch (route.name) {
          case 'Home': iconName = 'home'; break;
          case 'Profile': iconName = 'person'; break;
          case 'Post': iconName = 'add-circle'; break;
          case 'Search': iconName = 'search'; break;
          case 'Notifications': iconName = 'notifications'; break;
        }
        return <Ionicons name={iconName as any} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3d00b6',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeFeed} />
    <Tab.Screen name="Search" component={SearchFilter} />
    <Tab.Screen name="Post" component={PostCreation} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator; 