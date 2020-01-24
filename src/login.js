import React from 'react'

export default function login() {
	return (
		<div>
			<form className="w-50 mx-auto my-2">
				<fieldset className="form-group"> 
					<input className="form-control" type="text" id="name" placeholder="Nome"/>
				</fieldset>
				<fieldset className="form-group">
					<input type="text" id="email" className="form-control input " placeholder="Email"/>
				</fieldset>
				<fieldset className="form-group">
					<input type="password" id="senha" className="form-control input " placeholder="Senha"/>
				</fieldset>

			</form>
			<div className="container-fluid w-50 mx-auto">
				<div class="d-flex">
					<button type="button" class="mx-1 btn btn-success">Enviar</button>
					<button type="button" class="mx-1 btn btn-info">Cadastre-se</button>
					<button type="button" class="mx-1 btn btn-danger">Retornar</button>
				</div>
			</div>
			<span className="resposta"></span>
		</div>
		)
}