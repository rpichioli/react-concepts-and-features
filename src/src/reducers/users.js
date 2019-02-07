import { SET_USERS, ADDED_USER, UPDATED_USER, REMOVED_USER } from '../actions/users';

let mockedState = [
	{id: 1, name: 'Catharine', lastName: 'Owen'},
	{id: 2, name: 'Eliseo', lastName: 'Santana Nuñes'},
	{id: 3, name: 'Andrey', lastName: 'Klein'},
	{id: 4, name: 'Muhhamed', lastName: 'Al-Ain'},
	{id: 5, name: 'Anna', lastName: 'Beatriz Almeida'}
];

/**
 * The "users" reducers
 * @param  {array} [state=mockedState] Actual state
 * @param  {object} [action={}]        Dispatched action to be handled
 * @return {array}                     Updated state
 */
export default function projects(state = mockedState, action = {}) {
	switch (action.type) {
		case SET_USERS: // Set users to list
			return state;
		case ADDED_USER: // Add new user to state
			return [...state, action.user];
		case UPDATED_USER: // Update specific user (by ID) in state
			return state.map((item, i) => {
				if (item.id === Number(action.user.id)) item = action.user;
				console.log(item)
				return item;
			});
		case REMOVED_USER: // Delete user from state
			return state.filter(item => item.id !== Number(action.id));
		default:
			return state;
	}
}
