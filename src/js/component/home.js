import React, { useState } from "react";
// import PropTypes from "prop-types";
//create your first component

export function Home() {
	const [todo, setTodo] = useState(["", ""]);
	const [inputValue, setInputValue] = useState("");

	const handleChange = event => {
		setInputValue(event.target.value);
	};
	const handleKeyPress = event => {
		//event.preventDefault();
		if (event.key === "Enter") {
			setTodo([...todo, inputValue]);
			//console.log(inputValue);
			// } else {
			// 	console.log("no funciona");
		}

		//que setee el valor de toDo con el valor que viene del input (inputValue)
		//crear una funcion handleclick para la x para borrar un elementTodo
		//borrar elemento de una array
		//eliminar la numeracion de la lista
		// video funcionamiento de map
	};
	return (
		<div className="container">
			<h1 className="text-center">TODOS</h1>
			<from className="Formulario">
				<input
					value={inputValue}
					type="text"
					placeholder="What needs to be done?"
					className="form-control my-2"
					onChange={handleChange}
					onKeyPress={handleKeyPress}></input>
			</from>
			<div className="listas-tareas mt-3">
				<div className="alert alert-warning d-flex">
					<ol>
						{todo.map((todoElement, key) => {
							return <li key={key}>{todoElement}</li>;
						})}
						<li>Make the bed</li>
						<li>Wash my hands</li>
					</ol>
					<h3 className="m-3">
						<i className="fas fa-times"></i>
					</h3>
				</div>
			</div>
		</div>
	);
}
