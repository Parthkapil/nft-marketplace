import React from "react";

import HeroSection from "../components/HeroSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	return (
		<>
			<ToastContainer position="top-center" />
			<HeroSection />
		</>
	);
};

export default Home;
