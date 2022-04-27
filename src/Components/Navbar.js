import React from "react";
import {Link} from "react-router-dom"

import Logo from "./Logo";
import LikesBox from "./LikesBox";


const Navbar = () => {

	return (
        <>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container-fluid">
					<div className="navbar-brand"><Logo /></div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<ul className="navbar-nav">
							<li className="nav-item ">
								<Link className="nav-link" to="/">
									Home|
								</Link>
							</li>
							<li className="nav-item ">
								<Link className="nav-link" to="/characters">
									Personajes|
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/starships">
									Naves|
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/planets">
									Planetas|
								</Link>
							</li>
							<li className="nav-item">
									<div className="nav-link"> <LikesBox /> </div>
							</li>
						</ul>
					</div>
				</div>
			</nav>			
		</> 
	
	);

 
};

export default Navbar;