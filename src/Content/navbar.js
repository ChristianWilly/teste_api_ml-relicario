import React from 'react'

export default function navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="http://localhost:3000" >Seu website</a>
				<ul className="nav navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="http://localhost:3000">link 1 <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="http://localhost:3000">Link 2</a>
					</li>
					<li className="nav-item">
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

			</nav>
		</div>
	)
}