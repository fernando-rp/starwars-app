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
                            <h1 className="title-banner">Ayuda al Mandaloriano</h1>
                            <p className="subtitle-banner">Protege la información de esta APP</p>
                        </div>
                    </div>
                
                </div>

            </div>

		</>
	);
}

export default Banner;