import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '@utils/Constants';
import Home from '@modules/home';
import Categories from '@modules/categories';
import Account from '@modules/account';
import Cart from '@modules/cart';
import {AccountIcon, CartIcon, CategoriesIcon, HomeIcon} from './TabIcons';

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  const count = 2;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.inactive,
        lazy: true,
        tabBarStyle: {paddingTop: Platform.OS === 'android' ? 0 : 10},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <HomeIcon focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CategoriesIcon focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <AccountIcon focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CartIcon focused={focused} size={size} color={color} />
          ),
          tabBarBadge: count > 0 ? count : undefined,
          tabBarBadgeStyle: {height: 16, width: 16},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
