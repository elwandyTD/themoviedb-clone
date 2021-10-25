import React from 'react';
import { SafeAreaView, ActivityIndicator, View, StyleSheet } from 'react-native';

import Text from '../atoms/Text';

import GlobalStyles from '../../globals/Styles';

const Loading = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<ActivityIndicator size={40} color={GlobalStyles.colors.orange} />
				<Text style={styles.text}>Loading ...</Text>
			</View>
		</SafeAreaView>
	)
}

export default Loading;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: '#FFF'
	},
	content: {
		textAlign: 'center',
		alignSelf: 'center'
	},
	text: {
		color: GlobalStyles.colors.black,
		fontSize: 18,
		textTransform: 'uppercase',
		marginTop: 5,
	}
})