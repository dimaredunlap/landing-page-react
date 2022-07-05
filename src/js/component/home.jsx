import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	let card1 = {"title": "Card One", "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
	let card2 = {"title": "Card Two", "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
	let card3 = {"title": "Card Three", "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
	let card4 = {"title": "Card Four", "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
	return (
		<div className="container">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex">
				<Card title={card1.title} description={card1.description}/>
				<Card title={card2.title} description={card2.description}/>
				<Card title={card3.title} description={card3.description}/>
				<Card title={card4.title} description={card4.description}/>
			</div>
        </div>
	);
};

export default Home;
