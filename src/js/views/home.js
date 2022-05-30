import React, {useContext, useEffect,} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext (Context); 

	useEffect(() => {
		/* actions.getPlanets(); */
		/* actions.getCharacters();
		actions.getVehicles() */
	},[])


	return (
		<div>
			<div className="container">
				<h1>PLANETS</h1>
				<div className="d-flex overflow-auto">
						{store.planets.map((planet) =>{
							return 	<div key={planet.uid} className="container">
											<div  className="card" style={{width: "18rem"}}>
												<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt="Card image cap"/>
												<div className="card-body">
													<h5 className="card-title">{planet.properties.name}</h5>
													<p className="card-text"> DIAMETRO: {planet.properties.diameter}</p>
													<p className="card-text">GRAVEDAD: {planet.properties.gravity}</p>
													<p className="card-text">POBLACION: {planet.properties.population}</p>
													<div className="d-flex">
														<Link to={"/single/" + planet.uid}>
															<button className="btn btn btn-light">DETALLES</button>
														</Link>
														<button className="offset-6 btn btn-light" onClick={()=> {
															actions.addFavorites(planet.properties.name)
														}}>
															<i className="fa-solid fa-heart"></i>
														</button>
													</div>
												</div>
											</div>
									</div>
							})}
					</div>
					<br/>
					<br/>
				<h1>PERSONAJES</h1>
				<div className="d-flex overflow-auto">
						{store.characters.map((characters) =>{
							return 	<div key={characters.uid} className="container">
											<div  className="card" style={{width: "18rem"}}>
												<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${characters.uid}.jpg`} alt="Card image cap"/>
												<div className="card-body">
													<h5 className="card-title">{characters.properties.name}</h5>
													<p className="card-text"> ALTURA: {characters.properties.height}"</p>
													<p className="card-text">PESO: {characters.properties.mass}kg</p>
													<p className="card-text">SEXO: {characters.properties.gender}</p>
													<div className="d-flex">
														<Link to={"/single-character/" + characters.uid}>
															<button className="btn btn btn-light">DETALLES</button>
														</Link>
														<button className="offset-6 btn btn-light" onClick={()=> {
															actions.addFavorites(characters.properties.name)
														}}>
															<i className="fa-solid fa-heart"></i>
														</button>
													</div>
												</div>
											</div>
									</div>
							})}
					</div>
					<br/>
					<br/>
					<h1>VEHICULOS</h1>
				<div className="d-flex overflow-auto">
						{store.vehicles.map((vehicles) =>{
							return 	<div key={vehicles.uid} className="container">
											<div  className="card" style={{width: "18rem"}}>
												<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} alt="Card image cap"/>
												<div className="card-body">
													<h5 className="card-title">{vehicles.properties.name}</h5>
													<p className="card-text"> CAPACIDAD DE CARGA: {vehicles.properties.cargo_capacity}"</p>
													<p className="card-text">CONSUMO: {vehicles.properties.consumables}kg</p>
													<p className="card-text">PRECIO: {vehicles.properties.cost_in_credits}</p>
													<div className="d-flex">
														<Link to={"/single-vehicle/" + vehicles.uid}>
															<button className="btn btn btn-light">DETALLES</button>
														</Link>
														<button className="offset-6 btn btn-light" onClick={()=> {
															actions.addFavorites(vehicles.properties.name)
														}}>
															<i className="fa-solid fa-heart"></i>
														</button>
													</div>
												</div>
											</div>
									</div>
							})}
					</div>

				</div>
			</div>
	)
	};
