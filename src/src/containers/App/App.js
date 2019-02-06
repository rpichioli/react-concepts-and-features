import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='container-fluid' style={{ marginTop: '15px' }}>
				<div className='row'>
					<div className='col-sm-2'>
						<ul className="list-group">
							<li className="list-group-item list-group-item-primary">Main Menu</li>
							<NavLink exact to="/" className="list-group-item">Welcome</NavLink>
							<NavLink  to="/users" className="list-group-item">Users Management</NavLink>
							<a href="https://github.com/rpichioli/spa-with-react-redux" target="_blank" className="list-group-item list-group-item-dark">GitHub</a>
							<a href="https://github.com/rpichioli" target="_blank" className="list-group-item list-group-item-dark">Owner Profile</a>
						</ul>
					</div>
					<div className='col-sm-10'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
