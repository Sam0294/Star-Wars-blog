import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getSinglePlanet()
	},[])

	return (
		<div className="jumbotron">

				<div className="card" style={{width: "18rem"}}>
					<div className="card-body">
						<h2 className="card-title">{store.data.name}</h2>
						<p className="card-text">Description:</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Diametro:  {store.data.diameter}</li>
						<li className="list-group-item">Periodo de rotacion:  {store.data.rotation_period}</li>
						<li className="list-group-item">Gravedad: {store.data.gravity}</li>
						<li className="list-group-item">Poblacion:  {store.data.population}</li>
						<li className="list-group-item">Clima:  {store.data.climate}</li>
						<li className="list-group-item">Terreno:  {store.data.terrain}</li>
						<li className="list-group-item">Superficie del agua:  {store.data.surface_water}</li>
						<li className="list-group-item">Creacion:  {store.data.created}</li>
						<li className="list-group-item">Edicion:  {store.data.edited}</li>
					</ul>
					<div className="card-body">
						<a href="#" className="card-link">Añadir a favoritos</a>
					</div>
				</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
