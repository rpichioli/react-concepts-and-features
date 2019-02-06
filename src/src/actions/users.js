//import axios from 'axios';

// ----- Constants -----------------------------------------------------
export const SET_USERS = 'SET_USERS';
export const ADDED_USER = 'ADDED_USER';
export const UPDATED_USER = 'UPDATED_USER';
export const REMOVED_USER = 'REMOVED_USER';

// ----- Actions -------------------------------------------------------
export function setUser() { return { type: SET_USERS }}
export function addedUser(user) { return { type: ADDED_USER, user }}
export function updatedUser(user) { return { type: UPDATED_USER, user }}
export function removedUser(id) { return { type: REMOVED_USER, id }}

// ----- Fetch and action dispatchs ------------------------------------
/**
 * Fetch all users
 */
export function fetchUsers() {
	return (dispatch, getState) => dispatch(setUser());
}

/**
 * Add new user
 */
export function saveUser(user) {
	return (dispatch, getState) => dispatch(addedUser(user));
}

/**
 * Update usr by ID
 */
export function updateUser(user) {
	return (dispatch, getState) => dispatch(updatedUser(user));
}

/**
 * Remove user by ID
 */
export function deleteUser(id) {
	return (dispatch, getState) => dispatch(removedUser(id));
}

/**
 * Get the last existing ID from mock - Thinking about it
 */
export function fetchLastID() {
	let users = getMockedData();
	return users.reduce((prev, current) => (prev.y > current.y) ? prev : current);
}

// ----- Internal ------------------------------------------------------
/**
 * Returns static mocked users
 * @return {array} Array of objects > Now on reducer initial state
 */
const getMockedData = () => {
	return [
		{id: 1, name: 'Catharine', lastName: 'Owen'},
		{id: 2, name: 'Eliseo', lastName: 'Santana Nuñes'},
		{id: 3, name: 'Andrey', lastName: 'Klein'},
		{id: 4, name: 'Muhhamed', lastName: 'Al-Ain'},
		{id: 5, name: 'Anna', lastName: 'Beatriz Almeida'}
	];
}
