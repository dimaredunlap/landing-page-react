import React from "react";
import Navbar from "./navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = (props) => {
	return (
			<div className="Card" style={{width: "16rem"}} class="bg-warning mt-2 mx-auto">
				<img className="card-img-top" src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cbe66879ae8c0ac09975d945f39137f6" alt="Card image cap" />
         		<div className="card-body">
            	<h5 className="card-title">{props.title}</h5>
            	<p className="card-text">{props.description}</p>
            	<a href="#" className="btn btn-primary">Find Out More!</a>
          	</div>
        </div>
	);
};

export default Card;
