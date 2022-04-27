import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { Link } from "react-router-dom";


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
        <div className="dropdown ">
					<button
						className="btn btn-dark dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos
						<span className="badge badge-light mx-2">{likes.length} </span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{!!likes &&
							likes.map((item, index) => {
								return (
									<>
										<div className="d-flex flex-row">
											<div className="px-2">
												<Link className="dropdown-item" to="#">
													{item}
												</Link>
											</div>
											<div className=" my-auto">
												<i
													key={index}
													className="far fa-trash-alt"
													title={item}
													onClick={handleLikeBox}
												/>
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