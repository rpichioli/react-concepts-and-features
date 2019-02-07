import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome developer!</h1>
				<div className="card">
					<div className="card-header">About the project</div>
					<div className="card-body">
						<p>You can see here some React + Redux techniques like <b>dispatching actions</b>, <b>reducer handling state itself</b> and <b>store receiving combined reducers</b>.</p>
						<p>We will <b>not persist data to database</b>, we will illustrate on the other hand the <b>synchronization between Redux store and browser LocalStorage</b>.</p>
						<p>With store and localStorage working togheter you can refresh data and anything will be lost.</p>
						<p>The reducer comes with a default mocked data mass.</p>
						<p>To access all of this stuff click on <b>Users Management</b> in menu.</p>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Home;
