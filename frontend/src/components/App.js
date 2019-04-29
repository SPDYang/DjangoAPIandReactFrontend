import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Form from './todos/Form';
import Todos from './todos/Todos'

import { Provider } from 'react-redux';
import store from '../store';


class App extends Component {
	render() {
		return (
			<Provider store = {store}>
				<Fragment>
					<div className = "container">
						<Form />
						<Todos />
					</div>
				</Fragment>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));