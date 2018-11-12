import React from 'react';
import PropTypes from 'prop-types';

class PropTypesUsage extends React.Component {
	render() {
		return (<div>
			<h1>{this.props.title}</h1>
			<p>{this.props.description}</p>
		</div>);
	}
}

// Default values for props
PropTypesUsage.defaultProps = {
  title: 'PropTypesUsage (default value)',
  description: 'No property received (default value).',
  year: new Date().getFullYear(),
  collection: {}
};

// Typechecking for properties
PropTypesUsage.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	collection: PropTypes.object // Optional
}

export default PropTypesUsage;
