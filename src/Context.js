import React from 'react'

const ContextAPI = React.createContext()


class ContextProvider extends React.Component {

// FUNÇÕES UNIVERSAIS

alteraConteudo =()=>{
	let title = document.querySelector(".title-card")
	console.log(title)
}
	render() {
		return (
			<ContextAPI.Provider value={{	
				alteraConteudo: this.alteraConteudo
			}}>
				{this.props.children}
			</ContextAPI.Provider>
		)
	}
}

const ContextConsumer = ContextAPI.Consumer

export {ContextProvider, ContextConsumer}