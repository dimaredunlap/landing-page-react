import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
			<div className="Jumbotron">
				<h1>A Warm Welcome!</h1>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<a href="#" className="btn btn-primary">Call to action!</a>
			</div>	
	);
};

export default Jumbotron;
