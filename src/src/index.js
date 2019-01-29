import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//-------------- Routing --------------
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//-------------- Bootstrap --------------
import 'bootstrap/dist/css/bootstrap.min.css';
//-------------- Components --------------
import App from './containers/App/App';
import Home from './components/Home/Home';

// Browser history
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<App>
			<Switch>
				<Route exact to="/" component={Home} />
			</Switch>
		</App>
	</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
