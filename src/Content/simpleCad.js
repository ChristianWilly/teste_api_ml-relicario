import React from 'react'
import {ContextConsumer} from "./Context.js"

export default function simpleCad() {
	return (
		<div>
			<form className="w-50 mx-auto my-2 cad">
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
				<div className="d-flex">
				<ContextConsumer>
					{ value => 
						<>
							<button onClick={value.teste} type="button" className="mx-1 btn btn-success">Enviar</button>
							<button type="button" className="mx-1 btn btn-info">Cadastre-se</button>
							<button type="button" className="mx-1 btn btn-danger">Retornar</button>
						</>
					}
				</ContextConsumer>
				</div>
			</div>
			<span className="resposta"></span>
		</div>
		)
}