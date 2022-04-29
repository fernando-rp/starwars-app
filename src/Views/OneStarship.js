import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Store/appContext.js";

import image0 from "../img/starships/0.jpeg"
import image1 from "../img/starships/1.jpeg"
import image2 from "../img/starships/2.jpeg"
import image3 from "../img/starships/3.jpeg"
import image4 from "../img/starships/4.jpeg"
import image5 from "../img/starships/5.jpeg"
import image6 from "../img/starships/6.jpeg"
import image7 from "../img/starships/7.jpeg"
import image8 from "../img/starships/8.jpeg"
import image9 from "../img/starships/9.jpeg"

const OneStarship = props => {
	const { store, actions } = useContext(Context);
	const { starship } = store;
	const { result } = starship;

	const { id } = useParams();

	useEffect(() => {
		actions.getStarship(id);
	}, []);

    const obtainImage=(index)=> {

		let imageCode;

		switch (index.toString()){
			case '2':
				imageCode=image0; break;
			case '3':
				imageCode=image1; break;
			case '5':
				imageCode=image2; break;
			case '9':
				imageCode=image3; break;
			case '11':
				imageCode=image4; break;
			case '10':
				imageCode=image5; break;
			case '13':
				imageCode=image6; break;
			case '15':
				imageCode=image7; break;
			case '12':
				imageCode=image8; break;
			case '17':
				imageCode=image9; break;
            default:
                console.log("Lo siento, no hay imagen");
                	
		}
        return (<img src={imageCode} className="card-img-top-s" alt="" />);
    }

	return (
		<>
			<div className="container mt-4 mb-4">
				{!!result && (
					<>
						<div className="card bg-dark">

							{obtainImage(id)}

							<div className="col">
								<div className="title name">{result.properties.name}</div>
								<p className="text-character">{result.description}</p>
							</div>
						</div>

						<div className="row bg-light mb-4 mt-4 w-100 mx-auto">
							<div className="col-2">
								<div className="title">Starship Class</div>
								<div className="input"> {result.properties.starship_class}</div>
							</div>
							<div className="col-3">
								<div className="title">Manufacturer</div>
								<div className="input"> {result.properties.manufacturer}</div>
							</div>
							<div className="col-2">
								<div className="title">Cost in Credits</div>
								<div className="input"> {result.properties.cost_in_credits}</div>
							</div>
							<div className="col-2 ">
								<div className="title">Length</div>
								<div className="input"> {result.properties.length}</div>
							</div>
							<div className="col-2">
								<div className="title">Passengers</div>
								<div className="input"> {result.properties.passengers}</div>
							</div>

							<div className="col-2 mx-auto">
								<div className="title">Hyperdrive Rating</div>
								<div className="input">{result.properties.hyperdrive_rating}</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default OneStarship;