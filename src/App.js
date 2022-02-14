import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages";
import ProductPage from "./pages/productPage";
import { Provider } from "./context";
import ProductInfoPage from "./pages/productInfoPage";
import ThankyouPage from "./pages/thankyouPage";

function App() {
	return (
		<Provider>
			<Router basename="/">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/productPage" element={<ProductPage />} />
					<Route path="/productInfoPage" element={<ProductInfoPage />} />
					<Route path="/thankyouPage" element={<ThankyouPage />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
