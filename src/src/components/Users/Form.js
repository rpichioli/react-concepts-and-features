import React from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/users';
import PropTypes from 'prop-types';

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
		// Set data into state if we have ID and found user by it in properties
		if (this.props.match.params.id && this.props.user) {
			this.setState({
				id: this.props.user.id,
				name: this.props.user.name,
				lastName: this.props.user.nastName,
			})
		}
	}

	/**
	 * Form validation
	 * @return {object} Object with errors existing and flag determining if is validation is OK or not
	 */
	validate = () => {
		let errors = {};
		if (this.state.name === '') errors.name = 'The name field must be filled.';
		if (this.state.lastName === '') errors.name = 'The last name field must be filled.';
		return { errors, isValid: Object.keys(errors).length === 0 }
	}

	/**
	 * Fill state by every input on-change call
	 * @param  {object} e The event properly
	 */
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return (
			<div>
				<h1>User registering</h1>
				<p>TODO: Form</p>
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
const mapStateToProps = (state) => {
	return {
		user: state.users.filter(user => user.id === Number(this.props.match.params.id))[0] || {}
	}
}

export default connect(mapStateToProps, {saveUser})(Form);
