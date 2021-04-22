import React, { useState } from "react";
// import PropTypes from "prop-types";
//create your first component

export function Home() {
	const [todo, setTodo] = useState(["", ""]);
	const [inputValue, setInputValue] = useState("");

	const handleChange = () => {
		setInputValue(event.target.value);
	};
	const handleKeyPress = event => {
		if (event.key === "Enter") {
			setTodo([...todo, inputValue]);
			// 	console.log(todo);
			// } else {
			// 	console.log("no funciona");
		}

		//que reciba texto pero si esta vacio que no se ejecute, especificar tecla que acepte la orden.
		//que setee el valor de toDo con el valor que viene del input (inputValue)
	};
	return (
		<div className="container">
			<h1 className="text-center">TODOS</h1>
			<form className="Formulario">
				<input
					value={inputValue}
					type="text"
					placeholder="What needs to be done?"
					className="form-control my-2"
					onChange={handleChange}
					onKeyPress={handleKeyPress}></input>
			</form>
			<div className="listas-tareas mt-3">
				<div className="alert alert-warning d-flex">
					<ol>
						{todo.map((todoElement, key) => {
							return <li key={key}>{todoElement}</li>;
						})}
						<li>Make the bed</li>
						<li>Wash my hands</li>
					</ol>
					<p>{todo}</p>
					{/* <h3 className="m-3">
						<i className="fas fa-times"></i>
					</h3> */}
				</div>
			</div>
		</div>
	);
}
