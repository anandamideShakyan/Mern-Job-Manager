import React from "react";
import { Logo } from "../components";
import styled from "styled-components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
const Landing = () => {
	return (
		<Wrapper>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby viral pop-up four dollar toast microdosing vegan tilde 3
						wolf moon bespoke readymade vape semiotics. Live-edge kinfolk
						typewriter, artisan la croix mixtape 8-bit. Tumeric truffaut
						polaroid ethical, coloring book leggings shoreditch DIY humblebrag
						vice thundercats chicharrones cronut occupy. Cloud bread humblebrag
						raclette, before they sold out irony crucifix vaporware messenger
						bag master cleanse mixtape.
					</p>
					<Link to="/register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
