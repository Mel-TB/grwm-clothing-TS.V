import { call } from 'typed-redux-saga/macro';

import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

import {
	fetchCategoriesAsync,
	onFetchCategories,
	categoriesSaga,
} from '../category.saga';

import { CATEGORIES_ACTION_TYPES } from '../category.types';
import {
	fetchCategoriesFailed,
	fetchCategoriesSucess,
} from '../category.action';

describe('Category sagas', () => {
	test('categoriesSaga', () => {
		testSaga(categoriesSaga)
			.next()
			.all([call(onFetchCategories)])
			.next()
			.isDone();
	});

	test('onFetchCategories', () => {
		testSaga(onFetchCategories)
			.next()
			.takeLatest(
				CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
				fetchCategoriesAsync
			)
			.next()
			.isDone();
	});

	test('fetchCategoriesAsync Success', () => {
		const mockCategriesArray = [
			{ id: 1, name: 'Category 1' },
			{ id: 2, name: 'Category 2' },
		];

		return expectSaga(fetchCategoriesAsync)
			.provide([[call(getCategoriesAndDocuments), mockCategriesArray]])
			.put(fetchCategoriesSucess(mockCategriesArray))
			.run();
	});

	test('fetchCategoriesAsync Failure', () => {
		const mockError = new Error('An error occurred while fetching categories');

		return expectSaga(fetchCategoriesAsync)
			.provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
			.put(fetchCategoriesFailed(mockError))
			.run();
	});
});
