import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import { Container, Circle, Image, Info, Icon } from "./ProductStyles";
import { toast } from "react-toastify";

function Product({ item, id, address }) {
	const getWalletData = item_id => {
		toast.success(`ItemId: ${item_id}, Address: ${address}`);
	};

	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon
					onClick={() => {
						getWalletData(item.id);
					}}
				>
					<ShoppingCartCheckoutOutlined />
				</Icon>
				<Icon
					onClick={() => {
						getWalletData(item.id);
					}}
				>
					<AddCircleOutlineIcon />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
}

export default Product;
