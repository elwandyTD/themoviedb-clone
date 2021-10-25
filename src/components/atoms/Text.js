import React from 'react';
import { Text as TextBase, StyleSheet } from 'react-native';

import GlobalStyles from '../../globals/Styles';

const Text = ({ style = {}, text = '', children, numberOfLines = 25 }) => {
	return (
		<TextBase numberOfLines={numberOfLines} style={[styles.text, style]}>
			{children ? children : text}
		</TextBase>
	);
}

export default Text;

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Oswald-Regular',
		color: GlobalStyles.colors.black
	}
});