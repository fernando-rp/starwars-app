import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import {BsTrash} from 'react-icons/bs'


const LikesBox=()=>{

    const {store,actions}=useContext(Context);
	const {likes}=store;

    const handleLikeBox=(e)=>{
		const n = e.target.title;
		!!likes &&
			likes.map((item, i) => {
				if (item === n) {
					actions.likesUpdate(i);
				}
			});
	}

    return(


        <div className="dropdown mx-2">
            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos
                <span className="badge badge-light mx-2">{likes.length} </span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {!!likes &&
                    likes.map((item, index) => {
                        return (
                            <>
                                <div className="d-flex flex-row" key={index}>
                                    <div className="px-2" >
                                        <div className="dropdown-item">
                                            {item}
                                        </div>
                                    </div>
                                    <div className=" my-auto">
                                        <i
                                            type="button"
                                            icon="fa-solid fa-trash"
                                            className=""
                                            onClick={handleLikeBox}
                                            title={item}
                                               
                                        >x</i>
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