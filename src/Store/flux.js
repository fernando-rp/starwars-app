
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: "null",
			planets: "null",
			starships: "null",
			planet: "null",
			character: "null",
			starship: "null",
			heart: "fas fa-heart",
			likes: ["hola","hola2","hola3"]
		},
		actions: {
			likesUpdate: i => {
				const { likes } = getStore();
				likes.splice(i, 1);
				setStore({ likes: likes });
			},

			addLikes: e => {
				const { likes } = getStore();
				const { characters } = getStore();
				const n = [e.target.id];
				const name = characters.results[n].name;
				const likes_update = likes.concat(name);
				setStore({ likes: likes_update });
			},

			addLikesP: e => {
				const { likes } = getStore();
				const { planets } = getStore();
				const n = [e.target.id];
				const name = planets.results[n].name;
				const likes_update = likes.concat(name);
				setStore({ likes: likes_update });
			},

			addLikesS: e => {
				const { likes } = getStore();
				const { starships } = getStore();
				const n = [e.target.id];
				const name = starships.results[n].name;
				const likes_update = likes.concat(name);
				setStore({ likes: likes_update });
			},

			getCharacters: async () => {
				const resp = await fetch("https://www.swapi.tech/api/people");
				const data = await resp.json();
				setStore({ characters: data });
			},

			getCharacter: async id => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ character: data });
					});
			},

			getPlanets: async () => {
				const resp = await fetch("https://www.swapi.tech/api/planets");
				const data = await resp.json();
				setStore({ planets: data });
			},

			getPlanet: async id => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ planet: data });
					});
			},

			getStarships: async () => {
				const resp = await fetch("https://www.swapi.tech/api/starships");
				const data = await resp.json();
				setStore({ starships: data });
			},

			getStarship: async id => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ starship: data });
					});
			}
		}
	};
};

export default getState;
