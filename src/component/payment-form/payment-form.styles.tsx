import { styled } from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		height: 280px;
		float: right;
	}
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;

	@media screen and (max-width: 768px) {
		height: 200px;
		min-width: 200px;
	}
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;

	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;
