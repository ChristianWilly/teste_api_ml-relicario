import React from 'react'
import {ContextConsumer} from "./Context.js"

export default function navbar() {
	return (
		<div>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
</div>
	)
}

/* 

			<nav className="navbar navbar-inverse">
				<div className="d-flex">

					<div className="navbar navbar-header">
						<a className="navbar-brand" href="http://localhost:3000" >Seu website</a>
					</div>
				<ul className="nav navbar-nav">
					<li  className="active">
						<a href="http://localhost:3000">Link 1</a>
					</li>
					<li>
						<a href="http://localhost:3000">Link 2</a>
					</li>
					<li>
						<a href="http://localhost:3000">Link 3</a>
					</li>

	{/*				<div className="dropdown open">
						<li className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Link 4
						</li>
						<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
							<a className="dropdown-item" href="http://localhost:3000" > Sub Link</a>
							<a className="dropdown-item" href="http://localhost:3000" > Sub Link</a>
							<a className="dropdown-item" href="http://localhost:3000" > Sub Link</a>
						</div>
					</div>
				</ul>

				<ul className="nav navbar-nav navbar-right">
					<li> 
						<a href="#">Login</a>
					</li>
				</ul>
			</div>
		</nav>

*/