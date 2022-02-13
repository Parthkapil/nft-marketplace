import React, { useState } from "react";
import axios from "axios";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "../AuthForm/AuthFormStyles";
import { Marginer } from "../Marginer";
import { toast } from "react-toastify";

export function SignupForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState("");
	const auth_api = process.env.REACT_APP_AUTH_API_URI;

	const handleSubmit = async () => {
		try {
			console.log(auth_api);
			setLoading(true);
			toast.success("Registration Successful. Please Login!");
			setName("");
			setEmail("");
			setPassword("");
			setLoading(false);
			return;

			// const { data } = await axios.put(`${auth_api}/register`, {
			// 	name,
			// 	email,
			// 	password,
			// 	role: "Admin",
			// });
			// console.log("register response : ", data);
			// toast.success("Registration Successful. Please Login!");
			// setName("");
			// setEmail("");
			// setPassword("");

			setLoading(false);
		} catch (error) {
			setLoading(false);
			toast.error(error.response.data);
		}
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input
					type="text"
					placeholder="Full Name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				{/* <Input type="password" placeholder="Confirm Password" /> */}
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit" onClick={handleSubmit}>
				Register
			</SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Already have an account?
				<BoldLink href="#" onClick={props.handleClick}>
					Log in
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
