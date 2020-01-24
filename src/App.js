import React from 'react';
import './App.css';
import Cards from './cards.js'
import Navbar from './navbar.js'
import Button from './buttons.js'
import Login from './login.js'
import {ContextProvider} from './Context.js'

function App() {
  return (
  	<>
  		<ContextProvider>
	    <div className="App">
			<Navbar />
			<div className="container-fluid m-1">
				<Button />
			</div>
			<div className="container-fluid bg-warning">
				<div className="container-fluid d-flex">
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<div className="container-fluid"><Login /></div>
	    </div>
	    </ContextProvider>
    </>
  );
}

export default App;
