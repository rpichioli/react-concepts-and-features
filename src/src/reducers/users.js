import { SET_USERS, ADDED_USER, UPDATED_USER, REMOVED_USER } from '../actions/users';

export default function projects(state = [], action = {}) {
	switch (action.type) {
		case SET_USERS:
			return action.users;
		case ADDED_USER:
			return [...state, action.user];
		case UPDATED_USER:
			return state.map((item, i) => {
				if (item.id === Number(action.user.id)) item.user = action.user;
				return item;
			});
		case REMOVED_USER:
			return state.filter(item => item.id !== Number(action.id));
		default:
			return state;
	}
}
