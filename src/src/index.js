import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//-------------- Routing --------------
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//-------------- Redux --------------
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//-------------- Redux --------------
import rootReducer from './reducers/rootReducer';
//-------------- Bootstrap --------------
import 'bootstrap/dist/css/bootstrap.min.css';
//-------------- Components --------------
import App from './containers/App/App';
import Home from './components/Home/Home';

// Browser history for routing configuration
const history = createBrowserHistory();
// Redux store -> Combined reducers and middleware for debugging
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route exact to="/" component={Home} />
				</Switch>
			</App>
		</Router>
	</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
