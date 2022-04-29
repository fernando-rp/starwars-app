import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import DeleteButton from "./DeleteButton";


const LikesBox=()=>{

    const {store}=useContext(Context);
	const {likes}=store;

    return(

        <div className="dropdown mx-4">
            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos
                <span className="badge badge-light mx-2">{likes.length} </span>
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                {!!likes &&
                    likes.map((item, index) => {
                        return (
                            <>
                                <div className="d-flex" key={index}>
                                    <div className="col-10 px-2" >
                                        <div className="dropdown-item">
                                            {item}
                                        </div>
                                    </div>
                                    <div>
                                        <DeleteButton title={item}/>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </div>

    )

}

export default LikesBox;