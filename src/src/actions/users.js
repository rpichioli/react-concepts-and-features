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
