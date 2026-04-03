import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="row text-center">
            
		<h1 className="text-center mt-5"></h1>
		<div className="container">
		<div className="col counter">
			<i class="fas fa-clock"></i>
		</div>
		<div className="col counter">
			{props.digSix}
		</div>
		<div className="col counter">
			{props.digFive}
		</div>
		<div className="col counter">
			{props.digFour}
		</div>
		<div className="col counter">
			{props.digThree}
		</div>
		<div className="col counter">
			{props.digTwo}
		</div>
		<div className="col counter">
			{props.digOne}
		</div>
		</div>
			
		</div>
	);
};

export default Home;