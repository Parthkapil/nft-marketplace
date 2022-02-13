import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages";
import ProductPage from "./pages/productPage";
import { Provider } from "./context";

function App() {
	return (
		<Provider>
			<Router>
				<Routes>
					{/* <ToastContainer position="top-center" /> */}
					<Route path="/" element={<Home />} />
					<Route path="/productPage" element={<ProductPage />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
