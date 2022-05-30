import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const {uid} = useParams();

	useEffect(() => {
 		/*actions.getSinglePlanet(uid)*/
	},[])

	return (

				<div className="jumbotron">
					<div className="d-flex justify-content-center">
							<div  className="card " style={{width: "18rem"}}>
								<div className="card-body">
									<h2 className="card-title">{store.planets[uid-1].properties.name}</h2>
								</div>
								<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${store.planets.uid}.jpg`} alt="Card image cap"/>
								<ul className="list-group list-group-flush">
								
									<li className="list-group-item">Diametro:  {store.planets[uid-1].properties.diameter}</li>
									<li className="list-group-item">Periodo de rotacion:  {store.planets[uid-1].properties.rotation_period}</li>
									<li className="list-group-item">Gravedad: {store.planets[uid-1].properties.gravity}</li>
									<li className="list-group-item">Poblacion:  {store.planets[uid-1].properties.population}</li>
									<li className="list-group-item">Clima:  {store.planets[uid-1].properties.climate}</li>
									<li className="list-group-item">Terreno:  {store.planets[uid-1].properties.terrain}</li>
									<li className="list-group-item">Superficie del agua:  {store.planets[uid-1].properties.surface_water}</li>
									<li className="list-group-item">Creacion:  {store.planets[uid-1].properties.created}</li>
									<li className="list-group-item">Edicion:  {store.planets[uid-1].properties.edited}</li>
								</ul> 
								
								<div className="card-body">
									<button className="btn btn-light" onClick={()=> {
										actions.addFavorites(store.planets[uid-1].properties.name)
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

Single.propTypes = {
	match: PropTypes.object
};
