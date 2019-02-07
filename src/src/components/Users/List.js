import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../../actions/users';

class List extends React.Component {

	render() {
		let users = this.props.users; // Receive data mapped into properties
		let grid = ''; // Default grid value

		// Populate grid if we have received data
		if (users.length > 0) {
			grid = (<table className='table'>
				<thead>
					<th width="10%">ID</th>
					<th>Full Name</th>
					<th width="10%">#</th>
				</thead>
				<tbody>
					{users.map((el, i) => {
						return (
							<tr key={i}>
								<td>{el.id}</td>
								<td><NavLink to={`/users/edit/${el.id}`}>{el.name} {el.lastName}</NavLink></td>
								<td><button onClick={() => this.props.deleteUser(el.id) } className='btn btn-danger btn-sm'>Delete</button></td>
							</tr>
						);
					})}
				</tbody>
			</table>);
		}

		return (
			<div>
				<h1>Users Management</h1>
				{users.length > 0 ? grid : <div className='alert alert-info'>No users to show!</div>}
				<NavLink to={'/users/add'} className='btn btn-primary'>Add new user</NavLink>
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

export default connect(mapStateToProps, { fetchUsers, deleteUser })(List);
