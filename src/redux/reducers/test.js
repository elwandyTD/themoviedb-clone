import { INC, DECR, Testing, pending, rejected, fulfilled } from '../actionString';

const initialState = {
	index: 0,
	data: {}
}

const testReducers = (prevState = initialState, action) => {
	switch (action.type) {
		case Testing + pending:
			return {
				...prevState,
				isPending: true,
        isRejected: false,
        isFulFilled: false,
			}
		case Testing + rejected:
			return {
				...prevState,
				isPending: false,
        isRejected: true,
        isFulFilled: false,
			}
		case Testing + fulfilled:
			return {
				...prevState,
				isPending: false,
        isRejected: false,
        isFulFilled: true,
			}
		
		case INC:
			return {
				...prevState,
				index: prevState.index + 1
			}
		case DECR:
			return {
				...prevState,
				index: prevState.index - 1
			}
		
		default:
			return {
				...prevState
			}
	}
}

export default testReducers;