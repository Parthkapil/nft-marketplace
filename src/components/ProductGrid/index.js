import React, { useEffect, useState, componentDidMount } from "react";
import Product from "../Product";
import { ButonContainer, Button, Container } from "./ProductGridStyles";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { data } from "../../data";

function ItemGrid() {
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState("Connect Wallet");
	const { state, pathname } = useLocation();

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
