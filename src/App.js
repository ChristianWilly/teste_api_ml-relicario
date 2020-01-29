import React from 'react';
import './App.css';

import Navbar from './Content/navbar.js'
import Button from './Content/buttons.js'
import Login from './Content/login.js'
import {ContextProvider} from './Content/Context.js'

function App() {
  return (
  	<>
  		<ContextProvider>
	    <div className="App">
			<Navbar />
			<div className="container-fluid m-1">
				<Button />
			</div>
			
			<div className="container-fluid"><Login /></div>
	    </div>
	    </ContextProvider>
    </>
  );
}

export default App;
