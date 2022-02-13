import React, { useState } from "react";
import Product from "../Product";
import { ButonContainer, Button, Container } from "./ProductGridStyles";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const data = [
	{
		id: 1,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM4ZnJoCeLc4AdxHFKpfKTy_ApKKvsgu9zw&usqp=CAU",
		title: "NFT 1",
		desc: "punk 1100",
		bg: "f5fafd",
	},
	{
		id: 2,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxX6lnYB7qYk3PJ4PvxoufZaSe8WQfSK6imWvgBNgJ-Xm6xBr6K34HtuR_9Gr11mfuvS8&usqp=CAU",
		title: "NFT 2",
		desc: "punk 1200",
		bg: "f5fafd",
	},
	{
		id: 3,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaclhA9X4DfVWLQlplVTuw73YrDExSLe5I02XEdmlKqVhADU7yo-CwqeuMeRlWJGluYKM&usqp=CAU",
		title: "NFT 3",
		desc: "punk 1300",
		bg: "f5fafd",
	},
	{
		id: 4,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElIxPmIy7V3LOpAjUNB2oHuaI5DxzLDEl5eaC_npTnoQ7Gxp3vyBAT5fWG1ySHAFLEps&usqp=CAU",
		title: "NFT 4",
		desc: "punk 1400",
		bg: "f5fafd",
	},
	{
		id: 5,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4GNGlSDL6XH5qEHBB8cJJKOIwnEOQF-o2fLRzT7KRR5xq8qSUE0iGdB4MmZ2muFfD-4&usqp=CAU",
		title: "NFT 5",
		desc: "punk 1500",
		bg: "f5fafd",
	},
	{
		id: 6,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XJTe901mMSYLxw-ijrDnCdf87V8Pad0UZj6Q2DFtSedTqC0GDT6O-k_IJEEvkHWZXn0&usqp=CAU",
		title: "NFT 6",
		desc: "punk 1600",
		bg: "f5fafd",
	},
	{
		id: 7,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1tE6BZdfkYKqiG5QevZBuS8eNYGslc_o_alUa2dsq6fqZYFmGpGrrzcITmRHcnUFPEk&usqp=CAU",
		title: "NFT 7",
		desc: "punk 1700",
		bg: "f5fafd",
	},
	{
		id: 8,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNVW1TOu8D65ZPh1dHQBM5EyYW4J8ecjp22tjbJT1LXf54a9JGJGTE0Q6-bJ75ypfnJc&usqp=CAU",
		title: "NFT 8",
		desc: "punk 1800",
		bg: "f5fafd",
	},
	{
		id: 9,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIpwncBqpf8lKIVCb9K3_M8jj3zlxbPo6nGAUVX46UJvf_raPIiavU5xoJwKbZ7ni_jI&usqp=CAU",
		title: "NFT 9",
		desc: "punk 1900",
		bg: "f5fafd",
	},
	{
		id: 10,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhAVHmHPXLxmoOBrDmahWZKodopUvNAD516xnFxi0w5iAGBWlCL0de2LjPAZfenHB1xM&usqp=CAU",
		title: "NFT 10",
		desc: "punk 2000",
		bg: "f5fafd",
	},
];

function ItemGrid() {
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState("Connect Wallet");

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log("MetaMask Here!");

			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then(result => {
					accountChangedHandler(result[0]);
					setConnButtonText("Wallet Connected");
					toast.success("Wallet Connected!!");
					getAccountBalance(result[0]);
				})
				.catch(error => {
					toast.error(error);
					setErrorMessage(error.message);
				});
		} else {
			toast.error("Need to install MetaMask");
			console.log("Need to install MetaMask");
			setErrorMessage("Please install MetaMask browser extension to interact");
		}
	};

	// update account, will cause component re-render
	const accountChangedHandler = newAccount => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	};

	const getAccountBalance = account => {
		window.ethereum
			.request({ method: "eth_getBalance", params: [account, "latest"] })
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	};

	// listen for account changes
	window.ethereum.on("accountsChanged", accountChangedHandler);

	window.ethereum.on("chainChanged", chainChangedHandler);

	return (
		<>
			{!defaultAccount && (
				<ButonContainer>
					<Button onClick={connectWalletHandler}>Connect Wallet!</Button>
				</ButonContainer>
			)}

			<Container>
				{data.map(item => (
					<Product item={item} key={item.id} address={defaultAccount} />
				))}
			</Container>
		</>
	);
}

export default ItemGrid;
