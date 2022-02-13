import React from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/NavBar";
import ProductInfo from "../components/ProductInfo";

function ProductInfoPage() {
	return (
		<>
			<ToastContainer style={{ width: "auto" }} position="top-center" />
			<NavBar />
			<ProductInfo />
		</>
	);
}

export default ProductInfoPage;
