import React, { Component } from 'react';
import {
  Platform,
  Alert,
  Text,
  View,
  Button,
  StyleSheet,
  ToolbarAndroid,
  TextInput,
  //KeyboardAvoidingView
} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  bah = 3
  bt4 = () => {
    console.log("Hi there from button 4.")
    Alert.alert('You tapped the button! 4');
  }
  instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      //backgroundColor: 'blue'
    },
    toolbar: {
      backgroundColor: '#2196F3',
      height: 56,
      alignSelf: 'stretch'
    },
    outerContainer: {
      flex: 1,
      margin: 10,
      //backgroundColor: 'red'
    },
    insetEdges10: {
      margin: 10
    },
    insetEdges5: {
      margin: 5
    },
    instructions: {
      marginTop: 15,
      marginBottom: 15,
      textAlign: 'center'
    },
    superDuperTitle: {
      fontSize: 30,
      marginBottom: 10
    }
  });

  constructor(props) {
    super(props)
    this.foo = () => {
      Alert.alert('You tapped the button! 2');
    }
    this.bar = () => {
      Alert.alert('You tapped the button! 3');
    }
    this.state = {text: ''};
  }

  someMethodNameHere() {
    Alert.alert('You tapped the button!');
  }

  render() {
    /**
    <ToolbarAndroid
      style={this.styles.toolbar}
      title="AwesomeApp"
      //actions={[{title: 'Settings', show: 'always'}]}
      />
    **/
    return (
      <View style={this.styles.pageContainer}>
        <View style={this.styles.outerContainer}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            />

          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>

          <Text style={this.styles.superDuperTitle}>Hello world!</Text>
          <Text style={this.styles.instructions}>{this.instructions}</Text>
        </View>

        <View style={this.styles.insetEdges10}>
          <Button
            onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            title="Details, Item #86"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <View style={this.styles.insetEdges5} />
          <Button
            buttonStyle={{elevation: 30}}
            onPress={this.bt4}
            title="Learn More 2"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
