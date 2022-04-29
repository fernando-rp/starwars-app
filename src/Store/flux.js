
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: "null",
			planets: "null",
			starships: "null",
			planet: "null",
			character: "null",
			starship: "null",
			likes: []
		},
		actions: {
			likesUpdate: i => {
				const { likes } = getStore();
				likes.splice(i, 1);
				setStore({ likes: likes });
			},

			addLikes: (character) => {
				const { likes } = getStore();
				const likes_update = likes.concat(character);
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
