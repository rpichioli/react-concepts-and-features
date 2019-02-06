import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';

class List extends React.Component {

	/**
	 * Call action to fetch data and fill state when component did mount
	 */
	componentDidMount = () => {
		//this.props.fetchUsers(); // Fetch data by action set into properties
	}

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
							<td>{el.name}</td>
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
