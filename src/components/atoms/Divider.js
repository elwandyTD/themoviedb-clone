import React from 'react';
import { View } from 'react-native';

import GlobalStyles from '../../globals/Styles';

const Divider = ({ width = '100%', height = 5, color = GlobalStyles.colors.white }) => {
	return <View style={{  width, height, backgroundColor: color   }} />
}

export default Divider;