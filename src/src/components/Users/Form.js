import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, saveUser } from '../../actions/users';
import classnames from 'classnames';
//import PropTypes from 'prop-types';

class Form extends React.Component {

	state = {
		// User information defaults
		id: null,
		name: '',
		lastName: '',
		// Validation handle this key based on usage
		errors: {}
	}

	/**
	 * Call action to fetch data and fill state when component did mount
	 */
	componentDidMount = () => {
		// Fill provisionally with all user information
		this.props.fetchUsers();

		// Set data into state if we have ID and found user by it in properties
		// if (this.props.match.params.id && this.props.user) {
		// 	this.setState({
		// 		id: this.props.user.id,
		// 		name: this.props.user.name,
		// 		lastName: this.props.user.nastName,
		// 	});
		// }
	}

	/**
	 * Update state when properties have suffered changes (if we have a valid user)
	 * @param  {object} nextProps Updated properties received as parameter
	 */
	componentWillReceiveProps = (nextProps) => {
		if (Object.keys(nextProps.user).length > 0) {
			this.setState({
				id: nextProps.user.id,
				name: nextProps.user.name,
				lastName: nextProps.user.lastName,
			});
		}
	}

	/**
	 * Form validation
	 * @return {object} Object with errors existing and flag determining if is validation is OK or not
	 */
	validate = () => { console.log('validating');
		let errors = {};
		if (this.state.name === '') errors.name = 'The name field must be filled.';
		if (this.state.lastName === '') errors.lastName = 'The last name field must be filled.';
		return { errors, isValid: Object.keys(errors).length === 0 };
	}

	/**
	 * Fill state by every input on-change call
	 * @param  {object} e The event properly
	 */
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	/**
	 * Handle form submit validating data informed and proceeding with database data save or edit
	 * @param  {object} e The event properly
	 */
	handleSubmit = (e) => {
		e.preventDefault();
		let {errors, isValid} = this.validate();
		if (!isValid) this.setState({errors});
		else {
			let { name, lastName } = this.state;
			this.props.saveUser({ name, lastName, id: 0 });
			this.props.history.push('/users');
		}
	}

	render() {
		let errors = this.state.errors;
		return (
			<div>
				<h1>User registering</h1>
				<p>TODO:</p>
				<ul>
					<li style={{textDecoration: 'line-through'}}>Layout</li>
					<li style={{textDecoration: 'line-through'}}>Manage state and set form mode</li>
					<li style={{textDecoration: 'line-through'}}>Lifecycle and fill if in edit mode</li>
					<li style={{textDecoration: 'line-through'}}>Validate form</li>
					<li style={{textDecoration: 'none'}}>Persist data to Redux through actions</li>
				</ul>

				<form method="POST" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} className={classnames('form-control', {'is-invalid': errors.name})} />
						{errors.name && <small class="invalid-feedback">{errors.name}</small>}
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last name</label>
						<input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}  className={classnames('form-control', {'is-invalid': errors.lastName})} />
						{errors.lastName && <small class="invalid-feedback">{errors.lastName}</small>}
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Save</button>
					</div>
				</form>
			</div>
		)
	}
}

// Thinking about properties..
// Form.defaultProps = {
// 	id: 0
// };
//
// Form.propTypes = {
// 	id: PropTypes.number
// }

/**
 * Map state into component properties properly
 * @return {object} Generated properties based on state filled by actions
 */
const mapStateToProps = (state, props) => {
	return {
		user: state.users.filter(user => user.id === Number(props.match.params.id))[0] || {}
	}
}

export default connect(mapStateToProps, {fetchUsers, saveUser})(Form);
