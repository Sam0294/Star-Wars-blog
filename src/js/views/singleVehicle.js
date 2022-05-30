import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const {uid} = useParams();

	useEffect(() => {
 		/*actions.getSingleVehicle(uid)*/
	},[])

	return (

				<div className="jumbotron">
					<div className="d-flex justify-content-center">
							<div  className="card " style={{width: "18rem"}}>
								<div className="card-body">
									<h2 className="card-title">{store.vehicles[uid-1].properties.name}</h2>
								</div>
								<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicle/${store.vehicles.uid}.jpg`} alt="Card image cap"/>
								<ul className="list-group list-group-flush">

                                    <li className="list-group-item">Modelo:  {store.vehicles[uid-1].properties.model}</li>
									<li className="list-group-item">Clase de vehiculo:  {store.vehicles[uid-1].properties.vehicle_class}</li>
									<li className="list-group-item">Fabricante:  {store.vehicles[uid-1].properties.manufacturer}</li>
									<li className="list-group-item">Precio en creditos: {store.vehicles[uid-1].properties.cost_in_credits}</li>
									<li className="list-group-item">Largo:  {store.vehicles[uid-1].properties.length}</li>
									<li className="list-group-item">tripulacion:  {store.vehicles[uid-1].properties.crew}</li>
									<li className="list-group-item">Pasajeros:  {store.vehicles[uid-1].properties.passengers}</li>
									<li className="list-group-item">Maxima velocidad en atmosfera:  {store.vehicles[uid-1].properties.max_atmosphering_speed}</li>
									<li className="list-group-item">Capacidad de cargo:  {store.vehicles[uid-1].properties.cargo_capacity}</li>
									<li className="list-group-item">Consumo:  {store.vehicles[uid-1].properties.consumables}</li>
								</ul> 
								
								<div className="card-body">
									<button className="btn btn-light" onClick={()=> {
										actions.addFavorites(store.vehicles[uid-1].properties.name)
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

SingleVehicle.propTypes = {
	match: PropTypes.object
};
