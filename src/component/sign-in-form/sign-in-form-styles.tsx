import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	width: fit-content;
	align-items: center;
	justify-content: center;
	gap: 15px;
	padding: 30px 40px;
	box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
		0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
		0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
	border-radius: 11px;

	h2 {
		margin: 10px 0;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 20px;
	filter: drop-shadow(0px 1px 0px #efefef)
		drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
	cursor: pointer;
`;

export const LinkSignUp = styled(Link)`
	text-decoration: underline;
	font-weight: 500;
`;
