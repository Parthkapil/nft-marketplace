import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Button = styled.button`
	width: 600px;
	height: 30px;
	border-radius: 10px;
	background-color: white;

	&:hover {
		background-color: grey;
	}
`;

export const ButonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
