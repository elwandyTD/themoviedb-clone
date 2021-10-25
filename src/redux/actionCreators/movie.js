import axios from 'axios';
import { API_URL, API_KEY_V3 } from '@env';

import { getTrendingProduct, getListProducts, getDetailProduct } from '../actionString';

export const getTrending = () => ({
	type: getTrendingProduct,
	payload: axios.get(`${API_URL}/trending/all/day?api_key=${API_KEY_V3}`)
});

export const getProducts = (url, page = 1, category = 'POPULAR_MOVIES') => ({
	type: getListProducts + `_${category}`,
	payload: axios.get(`${API_URL}${url}?api_key=${API_KEY_V3}&page=${page}`)
});

export const getProduct = (url) => ({
	type: getDetailProduct,
	payload: axios.get(`${API_URL}${url}?api_key=${API_KEY_V3}&append_to_response=videos,images,cast,review`)
})