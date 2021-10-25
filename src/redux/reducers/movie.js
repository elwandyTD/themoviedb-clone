import { getTrendingProduct, getListProducts, getDetailProduct, pending, rejected, fulfilled } from '../actionString';

const initialState = {
	detailMovie: {},
	trending: {},
	trendings: [],
	popularTVShows: [],
	popularMovies: [],
	isPending: false,
	isRejected: false,
	isFulfilled: false
}

const movieReducers = (prevState = initialState, action) => {
	let results = [];
	let res = {};

	switch (action.type) {
		case getTrendingProduct + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false
			}
		case getTrendingProduct + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				isFulfilled: false
			}
		case getTrendingProduct + fulfilled:
			results = action.payload.data.results
			
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
				trending: results[0]
			}
		
		case getListProducts + `_POPULAR_MOVIES` + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false
			}
		case getListProducts + `_POPULAR_MOVIES` + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				isFulfilled: false
			}
		case getListProducts + `_POPULAR_MOVIES` + fulfilled:
			results = action.payload.data.results

			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
				popularMovies: results
			}
		
		case getListProducts + '_POPULAR_TV_SHOWS' + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false
			}
		case getListProducts + '_POPULAR_TV_SHOWS' + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				isFulfilled: false
			}
		case getListProducts + '_POPULAR_TV_SHOWS' + fulfilled:
			results = action.payload.data.results

			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
				popularTVShows: results
			}
		
		case getDetailProduct + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false
			}
		case getDetailProduct + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				isFulfilled: false
			}
		case getDetailProduct + fulfilled:
			res = action.payload.data

			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
				detailMovie: res
			}
		
		default:
			return {
				...prevState
			}
	}
}

export default movieReducers;
