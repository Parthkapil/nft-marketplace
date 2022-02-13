import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;

export const ImgContainer = styled.div`
	flex: 1;
`;

export const Image = styled.img`
	width: 100%;
	height: 70vh;
	object-fit: cover;
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

export const Title = styled.h1`
	font-weight: 200;
`;

export const Desc = styled.p`
	margin: 20px 0px;
`;

export const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

export const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 100px;
	padding-left: 50px;
`;

export const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	padding-right: 50px;
`;

export const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

export const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	width: 120px;

	&:hover {
		background-color: #f8f4f4;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 50px;
`;
