import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Store/appContext"

import image0 from "../img/planets/0.jpeg"
import image1 from "../img/planets/1.jpeg"
import image2 from "../img/planets/2.jpeg"
import image3 from "../img/planets/3.jpeg"
import image4 from "../img/planets/4.jpeg"
import image5 from "../img/planets/5.jpeg"
import image6 from "../img/planets/6.jpeg"
import image7 from "../img/planets/7.jpeg"
import image8 from "../img/planets/8.jpeg"
import image9 from "../img/planets/9.jpeg"

import ButtonFavoritos from "../Components/ButtonFavoritos";

const Planets = () => {
	const { store } = useContext(Context);
	const { planets } = store;
	const { results } = planets;

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
                console.log("Lo siento, no hay imagen");
			
		}

		return (<img src={imageCode} className="card-img-top" alt="" />);
	}

	return (
		<>
			<div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 mx-auto mb-4 mt-4">
				{!!results &&
					results.map((item, index) => {
						return (
							<div key={index} className="col my-2">
								<div className="card ">
                                    {obtainImage(index)}
									<div className="card-body">
										<h5 className="card-title mx-4">{item.name} </h5>
										<p className="card-text"> </p>
										<div className="container">
											<div className="row col-12">
												<div className="col col-lg-10 col-md-11 col-sm-10 my-2">
													<Link to={`/oneplanet/${item.uid}/detail`} className="btn expediente">
														Ver Expediente
													</Link>
												</div>
												<div className="col-1 my-2">
                                                    <ButtonFavoritos key={index.toString()} name={results[index].name}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Planets;