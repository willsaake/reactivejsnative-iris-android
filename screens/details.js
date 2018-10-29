import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class DetailsScreen extends Component {
  styles = StyleSheet.create({
    buttonToButtonSpacing: {
      marginTop: 5,
      marginBottom: 5
    }
  })

  constructor (props) {
    super(props)

    itemId = props.navigation.getParam('itemId', 'NO-ID');
    otherParam = props.navigation.getParam('otherParam', 'some default value');
  }

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

  get currentItemId() {
    return this.itemId
  }

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
