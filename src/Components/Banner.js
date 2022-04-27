import React from "react";

import banner from '../img/layout/bg-4.jpeg'

const Banner=()=>{
	return (
		<> 
                <div className="banner-inner">
                    <div className="home banner-item">
                        <img src={banner} className="carousel-img d-block w-100" alt="..."/>
                            <div className="carousel-caption d-md-block">
                                <h1 className="light">Ayuda al Mandaloriano</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                </div>

		</>
	);
}

export default Banner;