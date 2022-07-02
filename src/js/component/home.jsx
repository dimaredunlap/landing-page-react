import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="Navbar"></div>
				<h1>Landing Page</h1>
				<button>Home</button>
				<button>About</button>
				<button>Contact</button>
			<div className="Jumbotron"></div>
			<div className="Card"></div>
			
		</div>
	);
};

export default Home;
