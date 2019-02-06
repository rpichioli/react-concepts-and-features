import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome developer!</h1>
				<div className="card">
					<div className="card-header">About the project</div>
					<div className="card-body">
						<p>Welcome, this is a SPA (single-page application) built with React + Redux.</p>
						<p>The objective is to show how to mantain a stateful application manipulating data through Redux applying action and reducer concepts.</p>
						<p>We will not persist database, this project is to illustrate React-Redux interation providing a working stateful application.</p>
						<p>The sync between Redux store (state mantained from any reducers) and the browser LocalStorage the way you can refresh data will not be lost.</p>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Home;
