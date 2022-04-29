import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import {BsTrash} from 'react-icons/bs'


const DeleteButton=(props)=>{

    const {store,actions}=useContext(Context);
	const {likes}=store;

    const handleLikeBox=()=>{
		const n = props.title;
		!!likes &&
			likes.map((item, i) => {
				if (item === n) {
					actions.likesUpdate(i);
                    actions.classButtonFavorite("heart")
                
				}
			});
	}

    return(

        <button className="removeFavorite col-2">
            <BsTrash className="delete" onClick={handleLikeBox} />
        </button>

    )

}

export default DeleteButton;