import React, { useState } from "react";

import { LoginForm } from "../LoginForm";
import { SignupForm } from "../RegisterForm";

import {
	AuthFormContainer,
	TopContainer,
	BackDrop,
	HeaderContainer,
	HeaderText,
	SmallText,
	InnerContainer,
} from "./AuthFormStyles";

const backdropVariants = {
	expanded: {
		width: "233%",
		height: "1050px",
		borderRadius: "20%",
		transform: "rotate(60deg)",
	},
	collapsed: {
		width: "130%",
		height: "550px",
		borderRadius: "50%",
		transform: "rotate(100deg)",
	},
};

const expandingTransition = {
	type: "spring",
	duration: 2.3,
	stiffness: 30,
};

export function AuthForm(props) {
	const [isExpanded, setExpanded] = useState(false);
	const [active, setActive] = useState("signin");

	const playExpandingAnimation = () => {
		setExpanded(true);
		setTimeout(() => {
			setExpanded(false);
		}, expandingTransition.duration * 1000 - 1500);
	};

	const switchToSignup = () => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive("signup");
		}, 400);
	};

	const switchToSignin = () => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive("signin");
		}, 400);
	};

	return (
		<AuthFormContainer>
			<TopContainer>
				<BackDrop
					initial={false}
					animate={isExpanded ? "expanded" : "collapsed"}
					variants={backdropVariants}
					transition={expandingTransition}
				/>
				{active === "signin" && (
					<HeaderContainer>
						<HeaderText>Welcome</HeaderText>
						<HeaderText>Back</HeaderText>
						<SmallText>Please sign-in to continue!</SmallText>
					</HeaderContainer>
				)}
				{active === "signup" && (
					<HeaderContainer>
						<HeaderText>Create</HeaderText>
						<HeaderText>Account</HeaderText>
						<SmallText>Please sign-up to continue!</SmallText>
					</HeaderContainer>
				)}
			</TopContainer>
			<InnerContainer>
				{active === "signin" && <LoginForm handleClick={switchToSignup} />}
				{active === "signup" && <SignupForm handleClick={switchToSignin} />}
			</InnerContainer>
		</AuthFormContainer>
	);
}
