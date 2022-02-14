import React from "react";
import {
	Button,
	Container,
	HeroBg,
	HeroBtnWrapper,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	Image,
	ImageContainer,
} from "./ThankyouStyles";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

function Thankyou() {
	let navigate = useNavigate();

	const backToList = () => {
		navigate(`/productPage`);
	};

	return (
		<HeroContainer>
			<HeroBg>
				{/* <VideoBg autoPlay={true} loop={true} muted={true} src={Video} type="video/mp4" /> */}
			</HeroBg>
			<HeroContent>
				<HeroH1>Thank you for Shopping with us!!</HeroH1>
				<HeroP>Please check your eamil for order Confirmation.</HeroP>
				<HeroBtnWrapper>
					<Button onClick={backToList}>
						Continue Shopping{" "}
						<MdArrowForward style={{ "margin-left": "8px", "font-size": "20px" }} />
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
}

{
	/* <Container>
			<ImageContainer>
				<Image src="https://images.pexels.com/photos/7563647/pexels-photo-7563647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
			</ImageContainer>
			<HeroContent>
				<HeroH1>Ideation and Creation Entrepreneurs</HeroH1>
				<HeroP>Where your Ideas take Wings!!</HeroP>
				<HeroBtnWrapper>
					<Button
						to="/joinus"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="false"
						dark="true"
					>
						Join Us {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</Container> */
}

export default Thankyou;
