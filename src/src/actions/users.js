//import axios from 'axios';

// ----- Constants -----
export const SET_USERS = 'SET_USERS';

// ----- Actions -----
export function setProjects(users) { return { type: SET_USERS, users }}

// ----- Fetch and action dispatchs -----
export function fetchProjects() {
	// TODO - Get data from localStorage
	let users = [
		{name: 'Filomena Silva'},
		{name: 'Eliseo Gonçalves'},
		{name: 'Marcos Roncador'}
	];

	// Return dispatched data
	return (dispatch, getState) => {
		dispatch(setProjects(users))
	};
}
