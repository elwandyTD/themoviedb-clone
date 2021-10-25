import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import Text from './atoms/Text';
	
import GlobalStyles from '../globals/Styles';

const Navbar = ({ title = '', back = true }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.navBar}>
				<View style={styles.navBarLeft}>
					<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
						{ back && <IconFA5 name="arrow-left" color={GlobalStyles.colors.black} size={20} /> }
					</TouchableOpacity>
					<Text>{title}</Text>
				</View>
			</View>
			{/* <View></View> */}
		</View>
	)
}

export default Navbar;

const styles = StyleSheet.create({
	container: {
		// flex: 1
		// zIndex: 10,
		// position: 'absolute',
		// width: '100%',
		// top: 0
		// left: 0,
		// right: 0,
	},
	navBar: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 12,
		paddingTop:  12,
		backgroundColor: '#FFF',
	},
	navBarLeft: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	navBarRight: {
		flex: 2
	},
	button: {
		padding: 5,
		marginRight: 10,
		borderRadius: 10,
	},
	title: {
		
	},
	content: {},
})