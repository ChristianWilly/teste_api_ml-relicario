import React from 'react'
import {ContextConsumer} from './Context.js'

export default function buttons() {
	return (
		<ContextConsumer>
		{	state => 		
					<div className="container-fluid rounded bg-success p-1">
						<button type="button" className="btn btn-dark m-1" >Cria conteúdo</button>
						<button type="button" className="btn btn-danger m-1">Deleta Conteúdo</button>
					</div>
		}
		</ContextConsumer>	
	)
}