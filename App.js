import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Home from './screens/Home'
import {createAppContainer} from 'react-navigation'

const stackNavigator = createStackNavigator({
  Signup: Signup,
  Signin : Signin,
  Home : Home
});

const App = createAppContainer(stackNavigator);

export default App;

