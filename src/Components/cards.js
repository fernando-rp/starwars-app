import React from "react";
import { Link } from "react-router-dom";
import Characters from "../img/layout/characters.jpeg";
import Planets from "../img/layout/planets.jpeg";
import Starship from "../img/layout/starship.jpeg";

const Cards = () => {
	return (
		<div className="container cardwrapper">
			<div className="row-12">
				<div className="col-md-12 col-sd-5 mx-auto">
					<p className="text-presentation">
						{" "}
						Hace mucho tiempo, un persistente programador creó una wiki de Star Wars en su desarrollo como Full
						Stack en 4Geeks Academy. Este programador se esmeró en crear una base de datos de los
						personajes, naves y planetas de la increíble saga de Star Wars. El imperio no quiere que tu
						sepas la verdad de esta base de datos, dado que la información es altamente valiosa y los
						dejaría vulnerables ante ataques. Tu misión será descubrirla y llevarla contigo para
						entregarsela a la resistencia. Confiamos en tu destreza, valentía y como siempre; que la fuerza
						te acompañe.
					</p>
				</div>
			</div>
			<div className="row col-12 mx-auto">
				<div className="col-md-4 col-sd-6 my-2">
					<div className="card">
						<img src={Characters} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Personajes</h5>
							<p className="card-text ">
								Descubre todos los personajes haciendo click en el siguiente link
							</p>
							<Link to="/characters" className="btn btn-dark">
								Ir a Personajes
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sd-6 my-2">
					<div className="card">
						<img src={Starship} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Naves</h5>
							<p className="card-text"> Descubre todas las naves haciendo click en el siguiente link</p>
							<Link to="/starships" className="btn btn-dark">
								Ir a Naves
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sd-6 my-2">
					<div className="card">
						<img src={Planets} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Planetas</h5>
							<p className="card-text">Descubre todos los planetas haciendo click en el siguiente link</p>
							<Link to="/planets" className="btn btn-dark">
								Ir a Planetas
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;