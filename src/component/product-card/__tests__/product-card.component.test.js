import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';

import ProductCard from '../product-card.component';

describe('Product card test', () => {
	test('it should add the product item when Product card button is clicked', async () => {
		const mockProductCard = {
			id: 1,
			imageUrl: 'test',
			name: 'item A',
			price: 10,
		};
		const { store } = renderWithProviders(
			<ProductCard product={mockProductCard} />,
			{
				preloadeState: {
					cart: {
						cartItems: [],
					},
				},
			}
		);

		const addToCartButtonElement = screen.getByText(/add to cart/i);
		await fireEvent.click(addToCartButtonElement);

		expect(store.getState().cart.cartItems.length).toBe(1);
	});
});
