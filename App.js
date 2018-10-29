/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import DashboardScreen from './screens/dashboard'
import DetailsScreen from './screens/details'

const RootStack = StackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: 'Dashboard',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
