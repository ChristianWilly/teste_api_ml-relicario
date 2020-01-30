import React from 'react'
import "./Login.css"

export default function Login() {

	return (
		<div>
						<form action="#" className="login-form">
							<h1>BEM VINDO!</h1>
							<div className="text-user">
								<input className="user" type="text" placeholder="Usuário" />
							</div>
							<div className="text-pass">
								<input className="paswd" type="password" placeholder="Senha"/>
							</div>
							<div className="container-fluid button-container"> 	
								<button 
								type="button" 
								className="m-1 btn btn-success"
								>
								Fazer Login
								</button>
								<button
								type="button" 
								className="m-1 btn btn-danger"
								>
								Retornar
								</button>
							</div>
						</form>
		</div>
	)
}