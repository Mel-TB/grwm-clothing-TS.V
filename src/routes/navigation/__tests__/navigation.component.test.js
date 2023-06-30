import { screen, fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';

import { renderWithProviders } from '../../../utils/test/test.utils';

import Navigation from '../navigation.component';
import exp from 'constants';
import { signOutStart } from '../../../store/user/user.action';

describe('Navigation tests', () => {
	test('It should render Sign in link and not Sign Out if there no CurrentUser', () => {
		renderWithProviders(<Navigation />, {
			preloadeState: {
				user: {
					currentUser: null,
				},
			},
		});

		const signOutLinkElement = screen.queryByText(/sign out/i);
		expect(signOutLinkElement).toBeNull();

		const signInLinkElement = screen.getByText(/sign in/i);
		expect(signInLinkElement).toBeInTheDocument();
	});

	test('It should render Sign Out and not Sign In if there is a currentUser', () => {
		renderWithProviders(<Navigation />, {
			preloadeState: {
				user: {
					currentUser: {},
				},
			},
		});

		const signInLinkElement = screen.queryByText(/sign in/i);
		expect(signInLinkElement).toBeNull();

		const signOutLinkElement = screen.getByText(/sign out/i);
		expect(signOutLinkElement).toBeInTheDocument();
	});

	test('It should not render a cart dropdown if isCartOpen is false', () => {
		renderWithProviders(<Navigation />, {
			preloadeState: {
				cart: {
					isCartOpen: false,
					cartItems: [],
				},
			},
		});

		const dropdownTextElement = screen.queryByText(/your cart is empty/i);
		expect(dropdownTextElement).toBeNull();
	});

	test('It should render a cart dropDown if isCartOpen is true', () => {
		renderWithProviders(<Navigation />, {
			preloadeState: {
				cart: {
					isCartOpen: true,
					cartItems: [],
				},
			},
		});

		const dropdownTextElement = screen.getByText(/Your cart is empty/i);
		expect(dropdownTextElement).toBeInTheDocument();
	});

	test('It should dispatch signOutStart action when clicking on the Sign Out Link', async () => {
		const mockDispatch = jest.fn();
		// jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockDispatch);

		renderWithProviders(<Navigation />, {
			preloadeState: {
				user: {
					currentUser: {},
				},
			},
		});

		const signOutLinkElement = screen.getByText(/sign out/i);
		expect(signOutLinkElement).toBeInTheDocument();

		await fireEvent.click(signOutLinkElement);

		expect(mockDispatch).toHaveBeenCalled();
		expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

		mockDispatch.mockClear();
	});
});
