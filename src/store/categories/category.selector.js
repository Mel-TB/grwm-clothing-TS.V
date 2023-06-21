import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategorie = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategorie],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);

export const selectIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading
);
