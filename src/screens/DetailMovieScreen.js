import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import { getTrending, getProducts, getProduct } from '../redux/actionCreators/movie';

import Navbar from '../components/Navbar';
import ItemList from '../components/ItemList';
import Divider from '../components/atoms/Divider';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import Loading from '../components/molecules/Loading';

import GlobalStyles from '../globals/Styles';
import { IMAGE_URL } from '@env';

class DetailMovieScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ready: false,
			type: ''
		}
	}

	async componentDidMount() {
		const { dispatch } = this.props;

		console.log(this.props.route);
		let { id, type = 'movie' } = this.props.route.params;

		await dispatch(getProduct(`/${type}/${id}`));

		this.setState({
			ready: true,
			type
		});
	}

	render() {
		if (!this.state.ready) {
			return <Loading />
		}

		const { detailMovie } = this.props.movie;
		const { type } = this.state;

		return (
			<ScrollView style={styles.container}>
				<Navbar title="Detail" />
				<ImageBackground style={styles.bgHeaderImage} source={{ uri: IMAGE_URL + detailMovie.poster_path }} resizeMode="cover">
					<View style={styles.bgHeaderContent}>
						<View style={styles.headerContent}>
							<View style={styles.headerContentInfo}>
								<ImageBackground style={styles.poster} source={{ uri: IMAGE_URL + detailMovie.poster_path }} resizeMode={'cover'} />
								<View style={styles.headerContentTexts}>
									<Text style={styles.contentTitle}>{type === 'tv' ? detailMovie.name : detailMovie.title}</Text>
									<View style={styles.contentGenres}>
										{detailMovie && detailMovie.genres.map((genre, index) => {
											return (
												<Text style={styles.contentGenre} key={index}>{genre.name}{(detailMovie.genres.length !== index + 1) && ', ' }</Text>
											);
										})}
										<Text style={[styles.contentGenre, { marginLeft: 15 }]}>{detailMovie.runtime} m.</Text>
										<View style={{ marginTop: 10, width: '100%' }}>
											<Button icon="caret-right" title="Play Trailer" size="small" />
										</View>
									</View>
								</View>
							</View>
							<View style={styles.headerContentDescription}>
								<Text style={[styles.contentTitle, { fontSize: 15 }]}>Overview</Text>
								<Text style={styles.contentDesc}>
									{detailMovie.overview}
								</Text>

								<View style={{ marginVertical: 15 }}>
									<Button icon="caret-right" title="Stream" />
								</View>
							</View>
							{/* <View>
							</View> */}
							{/* <View style={styles.headerContentTexts}>
								<Text style={styles.contentTitle}>{ type === 'tv' ? detailMovie.name : detailMovie.title}</Text>
								<Text numberOfLines={5} style={styles.contentDesc}>{detailMovie.overview}</Text>,
							</View> */}
						</View>
					</View>
				</ImageBackground>
				<View style={{ paddingTop: 200 }}>
					{/* <Text>Nice</Text>
					<Text>Nice</Text>
					<Text>Nice</Text>
					<Text>Nice</Text> */}
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = ({ movie }) => ({
	movie
});

export default connect(mapStateToProps)(DetailMovieScreen);

const styles = StyleSheet.create({
	container: {
		backgroundColor: GlobalStyles.colors.white,
	},
	bgHeaderImage: {
		minHeight: 300,
		flex: 1,
		// overflow: 'visible',
	},
	bgHeaderContent: {
		flex: 1,
		height: '100%',
		paddingTop: 50,
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		// overflow: 'visible',
	},
	headerContent: {
		width: '90%',
		minHeight: '100%',
		padding: 15,
		backgroundColor: '#FFF',
		alignSelf: 'center',
		borderRadius: 3,
		flex: 1,
	},
	headerContentInfo: {
		flex: 1,
		flexDirection: 'row'
	},
	poster: {
		flex: 1,
		maxWidth: 100,
		maxHeight: 140,
		overflow: 'hidden',
		borderRadius: 3,
		marginRight: 10
	},
	headerContentTexts: {
		flex: 1,
		height: '100%'
	},
	contentTitle: {
		fontSize: 18,
		fontWeight: '300'
	},
	contentGenres: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 3,
		flexWrap: 'wrap',
	},
	contentGenre: {
		fontSize: 12,
		color: GlobalStyles.colors.lightBlack,
		fontFamily: 'Oswald-Light'
	},
	contentDesc: {
		fontSize: 14,
		fontFamily: 'Oswald-ExtraLight'
	},
	headerContentDescription: {
		flex: 1,
		width: '100%',
	},
})