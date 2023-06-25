import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.action';
import SignUpForm from './component/sign-up-form/sign-up-form.component';
import Spinner from './component/spinner/spinner.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() =>
	import('./routes/authentification/authentication.component')
);
const Navigation = lazy(() =>
	import('./routes/navigation/navigation.component')
);
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const ConfirmPage = lazy(() => import('./component/confirm/confirm.component'));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />

					<Route path="auth/*" element={<Authentication />} />
					<Route path="/SignUpForm" element={<SignUpForm />} />

					<Route path="checkout" element={<Checkout />} />

					<Route path="checkout/*" element={<ConfirmPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
