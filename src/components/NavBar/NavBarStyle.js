import styled from "styled-components";

export const Container = styled.div`
	height: 60px;
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

export const Logo = styled.h1`
	font-weight: bold;
`;

export const SearchContainer = styled.div`
	border: 1px solid lightgrey;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

export const Input = styled.input`
	border: none;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
export const Center = styled.div`
	flex: 1;
	padding-left: 250px;
`;
export const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const MenuItem = styled.div`
	font-size: 18px;
	cursor: pointer;
	margin-left: 25px;
`;
