// @flow

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation'

type Props = {
  navigation: NavigationScreenProp<any>
};

export default class DetailsScreen extends Component<Props> {
  itemId: string;
  otherParam: string;

  styles = StyleSheet.create({
    buttonToButtonSpacing: {
      marginTop: 5,
      marginBottom: 5
    }
  });

  constructor (props: Props) {
    super(props);

    this.itemId = props.navigation.getParam('itemId', 'NO-ID');
    this.otherParam = props.navigation.getParam('otherParam', 'some default value');
    console.log("Hi, " + this.itemId + " " + this.otherParam);
  }

  // Why even have typing if the type doesn't matter @flow ??...
  //static navigationOptions = ({ navigation, navigationOptions, screenProps } : { navigation: any, navigationOptions: any, screenProps: any }) => {
  // $FlowFixMe
  static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
    console.log(navigationOptions);

    return {
      title: "Details - Item #"  + navigation.getParam('itemId', '?'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    };
  };

  render() {
    let nextItemId = Math.floor(Math.random() * 100);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <View
          style={this.styles.buttonToButtonSpacing}>
          <Button
            title={"Go to Details " + nextItemId + "... again"}
            onPress={() => this.props.navigation.push('Details', {
                itemId: nextItemId,
                otherParam: 'anything you want here',
              })}
          />
        </View>
        <View
          style={this.styles.buttonToButtonSpacing}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
        </View>
        <View
          style={this.styles.buttonToButtonSpacing}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View
          style={this.styles.buttonToButtonSpacing}>
          <Button
            title="Go All the way back"
            onPress={() => this.props.navigation.popToTop()}
          />
        </View>
      </View>
    );
  }
}
