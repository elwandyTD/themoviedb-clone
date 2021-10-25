import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import Text from './atoms/Text';
import Card from './molecules/Card';

import GlobalStyles from '../globals/Styles';
import { IMAGE_URL } from '@env';

const ItemList = ({ title = '', items = [], type = '' }) => {
	return (
		<View style={styles.container}>
			<View style={styles.sectionInfo}>
				<Text style={styles.title}>{title}</Text>
				<TouchableOpacity style={styles.btnMore}>
					<Text style={styles.textMore}>See More </Text>
					<IconFA5 style={styles.iconMore} name="arrow-right" color={GlobalStyles.colors.lightBlack} />
				</TouchableOpacity>
			</View>
			<ScrollView horizontal={true} style={styles.sectionList}>
				{items && items.map((item, index) => {
					return <Card key={index} type={type} uri={{ uri: IMAGE_URL + item.poster_path }} id={item.id} />

				})}
				{/* <Card uri={{ uri: IMAGE_URL + items[0].poster_path }} /> */}
			</ScrollView>
		</View>
	);
}

export default ItemList;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 5,
		paddingHorizontal: 15,
	},
	sectionInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		fontSize: 16,
	},
	btnMore: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: 60
	},
	textMore: {
		fontSize: 12
	},
	iconMore: {
		paddingTop: 4,
		marginLeft: 5,
		fontSize: 12
	},
	sectionList: {
		marginTop: 10,
		marginBottom: 5
	}
});