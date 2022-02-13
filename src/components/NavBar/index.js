import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
	Container,
	Wrapper,
	Left,
	Center,
	Right,
	Language,
	SearchContainer,
	Input,
	Logo,
	MenuItem,
} from "./NavBarStyle";
import { Badge, Menu } from "@mui/material";
import { ShoppingBasketOutlined } from "@mui/icons-material";

function NavBar() {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<SearchIcon style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>BAZAAR.</Logo>
				</Center>
				<Right>
					<MenuItem>Log out</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingBasketOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
}

export default NavBar;
