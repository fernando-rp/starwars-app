import React from "react";

import banner from '../img/layout/bg-4.jpeg'

const Banner=()=>{
	return (
		<> 
            <div  className="banner-home" >
                
                <div className="banner-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="img-banner d-block w-100" alt="..."/>
                        <div className="text-banner carousel-caption  d-md-block">
                            <h1 className="title-banner">La Misión del Mandaloriano</h1>
                            <p className="subtitle-banner">"En búsqueda de la base de datos"</p>
                        </div>
                    </div>
                
                </div>

            </div>

		</>
	);
}

export default Banner;