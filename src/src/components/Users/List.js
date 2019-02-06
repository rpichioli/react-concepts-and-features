import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUsers } from '../../actions/users';

class List extends React.Component {

	render() {
		let users = this.props.users; // Receive data mapped into properties
		let grid = ''; // Default grid value

		// Populate grid if we have received data
		if (users.length > 0) {
			grid = (<table className='table'>
				{users.map((el, i) => {
					return (
						<tr>
							<td>{el.id}</td>
							<td><NavLink to={`/users/edit/${el.id}`}>{el.name}</NavLink></td>
							<td>{el.lastName}</td>
						</tr>
					);
				})}
			</table>);
		}

		return (
			<div>
				<h1>Users management</h1>
				{users.length > 0 ? grid : <div className='alert alert-info'>No users to show!</div>}
			</div>
		)
	}
}

/**
 * Map state into component properties properly
 * @return {object} Generated properties based on state filled by actions
 */
const mapStateToProps = (state) => {
	return {
		users: state.users || []
	}
}

export default connect(mapStateToProps, {fetchUsers})(List);
