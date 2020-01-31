import React from 'react'
import axios from "axios"

const ContextAPI = React.createContext()


class ContextProvider extends React.Component {
constructor(props) {
	super(props)

	this.user = {
		 name: "",
		 emnail:"",
		 token: "",
		 auth: false
	}
}
// FUNÇÕES UNIVERSAIS
getUser = () =>{
	if(this.user.auth) return this.user.JSON()
}
teste =()=>{
	let aux = []
	aux.push(document.querySelector("#name").value)
	aux.push(document.querySelector("#email").value)
	aux.push(document.querySelector("#senha").value)

	if(aux[0] === ""){
		alert("nome ta vazio")
		document.querySelector("#name").focus()
	}else if(aux[1] === ""){
		alert("email esta vazio")
		document.querySelector("#email").focus()
	}else if(aux[2] === ""){
		alert("senha esta vazia")
		document.querySelector("#senha").focus()
	}

	axios({
	  	method: 'post',
		url: 'https://api-relicario.herokuapp.com/auth/registro',
		data: {
			name: aux[0],
			email: aux[1],
			password: aux[2]
		}
	}).then((res)=>{
		if(res.status === 200){
			alert('Usuário cadastrado com sucesso')
		}
	})
	  .catch((err) => alert("Erro: "+err))
}


cadUser = () => {
	let email = document.querySelector(".user").value
	let senha = document.querySelector(".pass").value
	
	axios({
		method: "post",
		url: "http://localhost:5000/user/login-auth",
		data: {
			email: email,
			senha: senha
		}
	}).then(response => {		
		console.log(response.data)
	}).catch(err => {
		let erro = err.request.response
		alert(erro)
	})	
}

registerUser =()=>{	
	let nam = document.getElementById("inputNome").value
	let snam = document.getElementById("inputSobreNome").value
	let mai = document.getElementById("inputEmail").value
	let pas = document.getElementById("inputPass").value
	let cep = document.getElementById("inputCEP").value
	let end = document.getElementById("inputAddress").value
	let cit = document.getElementById("inputCity").value
	let sta = document.getElementById("inputState").value

	axios({
		method: "post",
		url: "http://localhost:5000/user/register",
		data: {
			name: nam,
			sname: snam,
			email: mai,
			senha: pas,
			cep: cep,
			rua: end,
			cidade: cit,
			estado: sta,
			accessType: "admin"
		}
	}).then(response => {		
		console.log(response.data)
	}).catch(err => {
		let erro = err.request.response
		alert(erro)
	})
}


	render() {
		return (
			<ContextAPI.Provider value={{	
				teste: this.teste,
				getUser: this.getUser,
				caduser: this.cadUser,
				registerUser: this.registerUser
			}}>
				{this.props.children}
			</ContextAPI.Provider>
		)
	}
}

const ContextConsumer = ContextAPI.Consumer

export {ContextProvider, ContextConsumer}