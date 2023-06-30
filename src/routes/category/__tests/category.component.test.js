import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';

import Category from '../category.component';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		category: 'mens',
	}),
}));

describe('Category test', () => {
	// test('It should render a spinner ifLoading is true', () => {
	// 	renderWithProviders(<Category />, {
	// 		preloadeState: {
	// 			categories: {
	// 				isLoading: true,
	// 				categories: [],
	// 			},
	// 		},
	// 	});

	// 	const spinnerElement = screen.getByTestId('spinner');
	// 	expect(spinnerElement).toBeInTheDocument();
	// });

	test('It should render product if isLoading is false and there are items presents', () => {
		renderWithProviders(<Category />, {
			preloadeState: {
				categories: {
					isLoading: false,
					categories: [
						{
							title: 'mens',
							items: [
								{ id: 1, name: 'Product 1' },
								{ id: 2, name: 'Product 2' },
							],
						},
					],
				},
			},
		});

		const spinnerElement = screen.queryByTestId('spinner');
		expect(spinnerElement).toBeNull();

		const product1Element = screen.getByText(/product 1/i);
		expect(product1Element).toBeInTheDocument();
	});
});
