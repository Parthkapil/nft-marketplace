import React, { useState } from "react";
import {
	Container,
	Wrapper,
	ImgContainer,
	Image,
	InfoContainer,
	Title,
	Desc,
	Price,
	AddContainer,
	AmountContainer,
	Amount,
	Button,
	ButtonContainer,
} from "./ProductInfoStyles";
import { useLocation } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ProductInfo() {
	const location = useLocation();
	const params = location.state;
	const item = params.item;

	const [count, setCount] = useState(1);
	let navigate = useNavigate();

	const addCount = () => {
		setCount(count + 1);
	};

	const subtractCount = () => {
		if (count !== 1) {
			setCount(count - 1);
		}
	};

	const orderSuccess = () => {
		navigate(`/thankyouPage`);

		// toast.success("Order Successful!! Please check your Email for Confirmation.");
	};

	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={item.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{item.title}</Title>
					<Desc>{item.desc}</Desc>
					<Price>{item.price}</Price>

					<AddContainer>
						<AmountContainer>
							<Remove
								onClick={() => {
									subtractCount();
								}}
							/>
							<Amount>{count}</Amount>
							<Add
								onClick={() => {
									addCount();
								}}
							/>
						</AmountContainer>

						<ButtonContainer>
							<Button
								onClick={() => {
									orderSuccess();
								}}
							>
								Buy Product
							</Button>
						</ButtonContainer>
						<ButtonContainer>
							<Button
								onClick={() => {
									orderSuccess();
								}}
							>
								Buy NFT
							</Button>
						</ButtonContainer>
						<ButtonContainer>
							<Button>Add to Cart</Button>
						</ButtonContainer>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
}

export default ProductInfo;
