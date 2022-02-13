import styled from "styled-components";
import { motion } from "framer-motion";

const themeColor = "#7f8c8d";

export const BoxContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`;

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
	font-size: 11px;
	color: rgba(200, 200, 200, 0.8);
	font-weight: 500;
	text-decoration: none;
`;

export const BoldLink = styled.a`
	font-size: 11px;
	color: ${themeColor};
	font-weight: 500;
	text-decoration: none;
	margin: 0 4px;
`;

export const Input = styled.input`
	width: 100%;
	height: 42px;
	outline: none;
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-bottom: 1.4px solid transparent;
	transition: all 200ms ease-in-out;
	font-size: 12px;
	&::placeholder {
		color: rgba(200, 200, 200, 1);
	}
	&:not(:last-of-type) {
		border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
	}
	&:focus {
		outline: none;
		border-bottom: 2px solid ${themeColor};
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 11px 40%;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	border-radius: 100px 100px 100px 100px;
	cursor: pointer;
	transition: all, 240ms ease-in-out;
	background: ${themeColor};
	background: linear-gradient(58deg, ${themeColor} 20%, #000000 100%);
	&:hover {
		filter: brightness(1.03);
	}
`;

export const AuthFormContainer = styled.div`
	width: 350px;
	min-height: 550px;
	display: flex;
	flex-direction: column;
	border-radius: 19px;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	overflow: hidden;
`;

export const TopContainer = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1.8em;
	padding-bottom: 5em;
`;

export const BackDrop = styled(motion.div)`
	width: 130%;
	height: 100px;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 10%;
	transform: rotate(60deg);
	top: -290px;
	left: -70px;
	background: ${themeColor};
	background: linear-gradient(58deg, ${themeColor} 20%, #000000 100%);
`;

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const HeaderText = styled.h2`
	font-size: 30px;
	font-weight: 600;
	line-height: 1.24;
	color: #fff;
	z-index: 10;
	margin: 0;
`;

export const SmallText = styled.h5`
	color: #fff;
	font-weight: 500;
	font-size: 11px;
	z-index: 10;
	margin: 0;
	margin-top: 7px;
`;

export const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 1.8em;
`;
