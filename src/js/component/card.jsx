import React from "react";
import Navbar from "./navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = (props) => {
	return (
			<div className="Card" style={{width: "18rem"}}>
				<img className="card-img-top" src="..." alt="Card image cap" />
         		<div className="card-body">
            	<h5 className="card-title">{props.title}</h5>
            	<p className="card-text">{props.description}</p>
            	<a href="#" className="btn btn-primary">Go somewhere</a>
          	</div>
        </div>
	);
};

export default Card;
