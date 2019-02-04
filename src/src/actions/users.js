//import axios from 'axios';

// ----- Constants -----------------------------------------------------
export const SET_USERS = 'SET_USERS';
export const ADDED_USER = 'ADDED_USER';
export const UPDATED_USER = 'UPDATED_USER';
export const REMOVED_USER = 'REMOVED_USER';

// ----- Actions -------------------------------------------------------
export function setUser(users) { return { type: SET_USERS, users }}
export function addedUser(users) { return { type: ADDED_USER, users }}
export function updatedUser(users) { return { type: UPDATED_USER, users }}
export function removedUser(users) { return { type: REMOVED_USER, users }}

// ----- Fetch and action dispatchs ------------------------------------
/**
 * Fetch all users
 */
export function fetchProjects() {
	return (dispatch, getState) => dispatch(setUser(getMockedData()));
}

/**
 * Add new user
 */
export function addProjects(user) {
	return (dispatch, getState) => dispatch(addedUser(getMockedData()));
}

/**
 * Update usr by ID
 */
export function updateProjects(user) {
	return (dispatch, getState) => dispatch(updatedUser(getMockedData()));
}

/**
 * Remove user by ID
 */
export function removeProjects(id) {
	return (dispatch, getState) => dispatch(removedUser(getMockedData()));
}

/**
 * Get the last existing ID from mock - Just for tests
 */
export function fetchLastID() {
	let users = getMockedData();
	return users.reduce((prev, current) => (prev.y > current.y) ? prev : current);
}

// ----- Internal ------------------------------------------------------
/**
 * Returns static mocked users
 * @return {array} Array of objects
 */
const getMockedData = () => {
	return [
		{id: 1, name: 'Filomena Silva'},
		{id: 2, name: 'Eliseo Gonçalves'},
		{id: 3, name: 'Marcos Roncador'},
		{id: 4, name: 'Marcos Roncador'},
		{id: 5, name: 'Marcos Roncador'}
	];
}
