import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Navbar from './Content/navbar.js'
import {ContextProvider} from './Content/Context.js'

import Login from './Login/login.js'
import Home from './Home/home.js'
import Profile from "./Profile/profile.js"
import Form from './Formulario/formulario.js'

function App() {
  return (
  	<>
  		<ContextProvider>
		<Navbar />
	    <div className="App">
	    <Switch>
    		<Route path="/" exact component={Home} />
    		<Route path="/profile" component={Profile} />
    		<Route path="/login" component={Login} />	    	
        <Route path="/form" component={Form} />       
	    </Switch>
	    </div>
	    </ContextProvider>
    </>
  );
}

export default App;
