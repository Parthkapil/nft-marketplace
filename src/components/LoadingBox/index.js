import React from "react";
// import CircleLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";
// import RingLoader from "react-spinners/RingLoader";

function LoadingBox({ props }) {
	return (
		<div
			style={{
				position: "fixed",
				background: "#00000099",
				width: "100%",
				height: "100vh",
				top: 0,
				left: 0,
				paddingTop: "100px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<HashLoader color="#00e68a" loading={true} size={350} />
			</div>
			<div
				style={{
					paddingTop: "70px",
					paddingLeft: "520px",
				}}
			>
				<span
					style={{
						fontSize: "200%",
						fontWeight: "bold",
					}}
				>
					Please wait while we fetch data!
				</span>
			</div>
		</div>
	);
}

export default LoadingBox;
