import { AnyAction } from 'redux';

import { USER_ACTION_TYPES } from './user.types';

import {
	signInSuccess,
	signOutSuccess,
	signUpFailed,
	signInFailed,
	signOutFailed,
} from './user.action';
import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
	if (signInSuccess.match(action)) {
		return { ...state, currentUser: action.payload };
	}

	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null };
	}

	if (
		signOutFailed.match(action) ||
		signUpFailed.match(action) ||
		signInFailed.match(action)
	) {
		return { ...state, error: action.payload };
	}

	return state;
};
