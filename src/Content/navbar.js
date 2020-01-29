import React from 'react'
import {ContextConsumer} from "./Context.js"

export default function navbar() {
	return (
		<div>
			<div className="container-fluid">
				<nav className="navbar navbar-inverse">

		{/************************************************** LOGO **************************************************/}
					<div className="navbar navbar-header">
						<a className="navbar-brand" href="http://localhost:3000" >Seu website</a>
					</div>
		{/************************************************** MENU PRINCIPAL **************************************************/}
				<ul className="nav navbar-nav">
					<li  className="active">
						<a className="nav-link" href="http://localhost:3000">link 1</a>
					</li>
					<li>
						<a className="nav-link" href="http://localhost:3000">Link 2</a>
					</li>
					<li>
						<a className="nav-link" href="http://localhost:3000">Link 3</a>
					</li>

					<div className="dropdown open">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Link 4
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
							<a className="dropdown-item" href="http://localhost:3000" > Sub Link</a>
							<a className="dropdown-item" href="http://localhost:3000" > Sub Link</a>
							<a className="dropdown-item" href="http://localhost:3000" > Sub Link</a>
						</div>
					</div>
				</ul>

		{/************************************************** MENU À DIREITA **************************************************/}

				</nav>
			</div>
		</div>
	)
}