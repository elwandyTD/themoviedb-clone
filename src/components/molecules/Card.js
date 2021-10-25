import React from 'react';
import { TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ uri = {}, onPress = () => {}, id = 0, type = '' }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', { id, type})}>
			<ImageBackground source={uri} resizeMode={'cover'} style={styles.bgImage}></ImageBackground>
		</TouchableOpacity>
	);
}

export default Card;

const styles = StyleSheet.create({
	container: {
		// aspectRatio: 3 / 2,
		height: 130,
		width: 100,
		borderRadius: 3,
		overflow: 'hidden',
		marginRight: 10
	},
	bgImage: {
		height: '100%',
		width: '100%'
	}
});