const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			data:[]
		},
		actions: {
			getPlanets: async ()=>{
				const response = await fetch("https://www.swapi.tech/api/planets/");
				const info = await response.json()
				setStore({planets: info.results})				
			},

			getSinglePlanet: async ()=>{
				const store = getStore()
				const response = await  fetch(`https://www.swapi.tech/api/planets/${store.planets.uid}`)
				const info = await response.json()
				setStore({data:info.result.properties})				
			}  

		}
	};
};


export default getState;
