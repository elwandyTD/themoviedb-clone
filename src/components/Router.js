import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import IntroductionScreen from '../screens/IntroductionScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';

const Stack = createNativeStackNavigator();

class Router extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		StatusBar.setBackgroundColor('black');
		// StatusBar.setTranslucent(true);
	}

	componentWillUnmount() {
		// StatusBar.setBackgroundColor('blue');
		// StatusBar.setTranslucent(false);
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
					<Stack.Screen name="Intro" component={IntroductionScreen} />
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Detail" component={DetailMovieScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default Router;