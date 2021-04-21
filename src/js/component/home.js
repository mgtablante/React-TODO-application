import React, { useState } from "react";
// import PropTypes from "prop-types";
//create your first component

export function Home() {
	const [todo, setTodo] = useState(["Make the bed", "Wash my hands"]);
	const [inputValue, setInputValue] = useState([]);

	const handleChange = () => {
		setInputValue(event.target.value);
		console.log("inputValue ", inputValue);
	};
	const handleKeyPress = event => {
		if (event.keyCode == "13") {
			todo.push(inputValue);
			//setTodo.push(element1[, ...[, elementN]])
			console.log(todo);
		}
		//Utilizar la función setTodo para poder modificar la variable de estado que declaramos con ["Make the bed"..]
		//que reciba texto pero si esta vacio que no se ejecute, especificar tecla que acepte la orden.
		//que setee el valor de toDo con el valor que viene del input (inputValue)
		// hacer dos if
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
					<p>{todo}</p>
					<h3 className="m-3">
						<i className="fas fa-times"></i>
					</h3>
				</div>
			</div>
		</div>
	);
}
