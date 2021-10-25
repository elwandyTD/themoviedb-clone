import { Testing, INC, DECR } from '../actionString';

export const Increment = () => ({
	type: INC
});

export const Decrement = () => ({
	type: DECR
});