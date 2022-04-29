
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Store/appContext.js";

import image0 from "../img/characters/0.jpeg"
import image1 from "../img/characters/1.jpeg"
import image2 from "../img/characters/2.jpeg"
import image3 from "../img/characters/3.jpeg"
import image4 from "../img/characters/4.jpeg"
import image5 from "../img/characters/5.jpeg"
import image6 from "../img/characters/6.jpeg"
import image7 from "../img/characters/7.jpeg"
import image8 from "../img/characters/8.jpeg"
import image9 from "../img/characters/9.jpeg"

const OneCharacter = () => {
	const { store, actions } = useContext(Context);
	const { character } = store;
	const { result } = character;

	const { id } = useParams();

	useEffect(() => {
		actions.getCharacter(id);
	}, []);


    const obtainImage=(index)=> {

		let imageCode;

		switch (index.toString()){
			case '0':
				imageCode=image0; break;
			case '1':
				imageCode=image1; break;
			case '2':
				imageCode=image2; break;
			case '3':
				imageCode=image3; break;
			case '4':
				imageCode=image4; break;
			case '5':
				imageCode=image5; break;
			case '6':
				imageCode=image6; break;
			case '7':
				imageCode=image7; break;
			case '8':
				imageCode=image8; break;
			case '9':
				imageCode=image9; break;
            default:
                console.log("Lo siento, no hay imagen")
                	
		}
        return (<img src={imageCode} className="card-img-top-s" alt="" />);
    }

	return (
		<>
			<div className="container mt-4 mb-4 d-flex flex-column">
				{!!result && (
					<>
						<div className="card bg-dark">
						    {obtainImage(id-1)}
							<div className="card-body">
								<div className="title name">{result.properties.name}</div>
								<p className="text-character">{result.description}</p>
							</div>
						</div>

						<div className="row bg-light mb-4 mt-4 w-100 mx-auto">
							<div className="col-2">
								<div className="title">Gender</div>
								<div className="input"> {result.properties.gender}</div>
							</div>
							<div className="col-2">
								<div className="title">Height</div>
								<div className="input"> {result.properties.height}</div>
							</div>
							<div className="col-2">
								<div className="title">Mass</div>
								<div className="input"> {result.properties.mass}</div>
							</div>
							<div className="col-2 ">
								<div className="title">Birth Year</div>
								<div className="input"> {result.properties.birth_year}</div>
							</div>
							<div className="col-2">
								<div className="title">Eye Color</div>
								<div className="input"> {result.properties.eye_color}</div>
							</div>

							<div className="col-2">
								<div className="title">Skin Color</div>
								<div className="input">{result.properties.skin_color}</div>
							</div>
						</div>
					</>
				)}
			</div>

		</>
	);
};

export default OneCharacter;