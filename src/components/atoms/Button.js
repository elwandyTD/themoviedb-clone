import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import Text from './Text';

import GlobalStyles from '../../globals/Styles';

const Button = ({ title = '', icon, btnColor = GlobalStyles.colors.orange, size = 'Big', style = {}, txtColor = '#FFF', onPress = () => {} }) => {
	return (
		<TouchableOpacity style={[ size === 'Big' ? styles.containerBig : styles.container, { backgroundColor: btnColor }, style]} onPress={() => onPress()}>
			{icon && (
				<IconFA5 name={icon} style={[styles.icon, { color: txtColor }]} size={ size  === 'Big' ? 16 : 12} />
			)}
			<Text style={[styles.text, { color: txtColor, fontSize: size === 'Big' ? 16 : 12 }]}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 3,
		paddingHorizontal: 10,
		minHeight: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3
	},
	icon: {
		marginRight: 5
	},
	containerBig: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 3,
		paddingHorizontal: 15,
		minHeight: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3
	},
	text: {
		textTransform: 'uppercase',
	}
});