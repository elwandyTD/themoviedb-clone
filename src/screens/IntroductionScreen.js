import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Loading from '../components/molecules/Loading';

class IntroductionScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Text>Introduction Screen</Text>
			</>
		)
	}
}

export default IntroductionScreen;

const styles = StyleSheet.create({
	container: {},
})