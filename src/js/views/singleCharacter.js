import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const {uid} = useParams();

	useEffect(() => {
 		/*actions.getSingleCharacter(uid)*/
	},[])

	return (

				<div className="jumbotron">
					<div className="d-flex justify-content-center">
							<div  className="card " style={{width: "18rem"}}>
								<div className="card-body">
									<h2 className="card-title">{store.characters[uid-1].properties.name}</h2>
								</div>
								<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${store.characters.uid}.jpg`} alt="Card image cap"/>
								<ul className="list-group list-group-flush">
								
									<li className="list-group-item">Altura:  {store.characters[uid-1].properties.height}</li>
									<li className="list-group-item">Peso:  {store.characters[uid-1].properties.mass}</li>
									<li className="list-group-item">Color de cabello: {store.characters[uid-1].properties.hair_color}</li>
									<li className="list-group-item">Color de piel:  {store.characters[uid-1].properties.skin_color}</li>
									<li className="list-group-item">Color de ojos:  {store.characters[uid-1].properties.eye_color}</li>
									<li className="list-group-item">Fecha de nacimiento:  {store.characters[uid-1].properties.birth_year}</li>
									<li className="list-group-item">Genero:  {store.characters[uid-1].properties.gender}</li>
									<li className="list-group-item">Creacion:  {store.characters[uid-1].properties.created}</li>
									<li className="list-group-item">Edicion:  {store.characters[uid-1].properties.edited}</li>
								</ul> 
								
								<div className="card-body">
									<button className="btn btn-light" onClick={()=> {
										actions.addFavorites(store.characters[uid-1].properties.name)
									}}>Añadir a favoritos</button>
								</div>
							</div> 
					</div>
						<div>
							<Link to="/">
							<span className="btn btn-primary btn-lg" href="#" role="button">
								Back home
							</span>
							</Link>
						</div>
				</div>

	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};
