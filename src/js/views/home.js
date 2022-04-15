import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext (Context);

	useEffect(() => {
		actions.getPlanets();
		
	},[])

	return (
		<div>
			<h1>Planets</h1>
			<div className="row">
				{store.planets.map((planet) =>{
					return <div key={planet.uid} className="card" style={{width: "18rem"}}>
					<img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
					<div className="card-body">
					<h5 className="card-title">{planet.name}</h5>
					<p className="card-text"> GENDER: {planet.url}</p>
					<p className="card-text">AGE: {planet.uid}</p>
					<p className="card-text">LOCATION: {planet.name}</p>
					<Link to={"/single/" + planet.uid}>
					<button className="btn btn-primary">More Info</button>
					</Link>
					</div>
				</div> 
					})}
			</div>
		</div>
	)
	};
