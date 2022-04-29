import React, { useContext, useState } from "react";

import {AiFillHeart} from 'react-icons/ai'
import { Context } from "../Store/appContext";


const ButtonFavoritos=(props)=>{

    const { store, actions } = useContext(Context);
	const { likes } = store;

    const [classValue,setClassValue]=useState("heart")

    const addFavoritos=()=>{

    let name=props.name;

    const found = likes.find(
        element => element === name
    );

    if (found === undefined || found === null) {
        actions.addLikes(name);
        setClassValue("heart-touch");
        // actions.classButtonFavorite("heart-touch")


    } else {
        !!likes &&
            likes.map((item, i) => {
                if (item === found) {
                    setClassValue("heart");
                    actions.likesUpdate(i);
                    // actions.classButtonFavorite("heart")
                }
            });
    }}


    return(
        <button className="addFavorite">
            <AiFillHeart className={
                likes.find(item => item === props.name)
                ? "heart-touch"
                : "heart"
                } 
                onClick={addFavoritos} />
        </button>
													
    )


}

export default ButtonFavoritos;