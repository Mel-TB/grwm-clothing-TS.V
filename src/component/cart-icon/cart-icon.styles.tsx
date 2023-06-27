import { styled } from 'styled-components';

import { ReactComponent as ShoppingSVG } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSVG)`
	width: 24px;
	height: 24px;

	@media screen and (max-width: 768px) {
		width: 35px;
		height: 35px;
	}
`;

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;

	@media screen and (max-width: 768px) {
		background-color: yellowgreen;
		border-radius: 100%;
		margin-bottom: -5px;
		padding: 3px 8px;
		height: 20px;
		margin-left: -1px;
		width: 20px;
		color: black;
	}
`;
