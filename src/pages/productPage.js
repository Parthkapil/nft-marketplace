import React from "react";
import ItemGrid from "../components/ProductGrid";
import NavBar from "../components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function ProductPage() {
	return (
		<>
			<ToastContainer style={{ width: "auto" }} position="top-center" />
			<NavBar />
			<ItemGrid />
		</>
	);
}

export default ProductPage;
