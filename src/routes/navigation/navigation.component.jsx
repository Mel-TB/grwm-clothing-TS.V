import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action';

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './navigation.styles';

const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutUser = () => dispatch(signOutStart());

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>

					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							{' '}
							Sign out{' '}
						</NavLink>
					) : (
						<NavLink to="/auth">Sign in</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
