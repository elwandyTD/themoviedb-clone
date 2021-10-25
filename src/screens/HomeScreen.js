import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import { getTrending, getProducts } from '../redux/actionCreators/movie';

import Navbar from '../components/Navbar';
import ItemList from '../components/ItemList';
import Divider from '../components/atoms/Divider';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import Loading from '../components/molecules/Loading';

import GlobalStyles from '../globals/Styles';
import { IMAGE_URL } from '@env';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ready: false
		}
	}

	async componentDidMount() {
		const { dispatch } = this.props;

		await dispatch(getTrending());
		await dispatch(getProducts('/movie/popular', 1, 'POPULAR_MOVIES'));
		await dispatch(getProducts('/tv/popular', 1, 'POPULAR_TV_SHOWS'));

		this.setState({
			ready: true
		});
	}

	render() {
		if (!this.state.ready) {
			return <Loading />
		}

		const { trending, popularMovies, popularTVShows } = this.props.movie;

		return (
			<>
				<ScrollView style={styles.container}>
				<Navbar title="Home" back={false} />
					<ImageBackground style={styles.bgHeaderImage} source={{ uri: IMAGE_URL + trending.poster_path }} resizeMode="cover">
						<View style={styles.bgHeaderContent}>
							<View style={styles.headerContent}>
								<View style={styles.headerContentTexts}>
									<Text style={styles.contentTitle}>{trending.title}</Text>
									<Text numberOfLines={5} style={styles.contentDesc}>{trending.overview}</Text>
								</View>
								<View style={styles.headerContentButtons}>
									<Button title={'Stream'} style={{ marginRight: 5 }} icon="caret-right" />
									<View style={styles.headerContentButtonInfo}>
										<Button title={'My List'} style={{ marginHorizontal: 5 }} btnColor={'#FFF'} txtColor={GlobalStyles.colors.black} size="small" icon="plus" />
										<Button title={'Information'} style={{ marginLeft: 5 }} btnColor={'#FFF'} txtColor={GlobalStyles.colors.black} size="small" icon="info" />
									</View>
								</View>
							</View>
						</View>
					</ImageBackground>
					<ItemList title="Movies" type="movie" items={popularMovies} />
					<ItemList title="TV Shows" type="tv" items={popularTVShows} />
				</ScrollView>
			</>
		)
	}
}

const mapStateToProps = ({ movie }) => ({
	movie
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
	container: {
		backgroundColor: GlobalStyles.colors.white,
	},
	bgHeaderImage: {
		height: 500,
		flex: 1,
		overflow: 'hidden',
	},
	bgHeaderContent: {
		flex: 1,
		height: '100%',
		paddingBottom: 40,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	headerContent: {
		paddingHorizontal: 15,
		// paddingBottom: 20
	},
	headerContentTexts: {
		
	},
	contentTitle: {
		fontSize: 24,
		color: '#FFF',
		marginBottom: 5
	},
	contentDesc: {
		fontSize: 14,
		color: '#FFF',
		fontFamily: 'Oswald-ExtraLight'
	},
	headerContentButtons: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 35,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerContentButtonInfo: {
		flex: 2.5,
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 15,
	},
	
})