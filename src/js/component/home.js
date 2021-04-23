import React, { useState } from "react";
// import PropTypes from "prop-types";
//create your first component

export function Home() {
	const [todo, setTodo] = useState([]);
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
		// const handleclick = event => {
		//     const { event } = lista.filter(i != event)
		//     };
		//que setee el valor de toDo con el valor que viene del input (inputValue)
		//crear una funcion handleclick para la x para borrar un elementTodo
		//borrar elemento de una array
		//video funcionamiento de map
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
					onKeyPress={handleKeyPress}
					autoFocus></input>
			</from>
			<div className="list-chores">
				<div className="alert alert-warning d-flex justify-content-between align-items-center">
					<ul className="col-sm-10">
						{todo.map((todoElement, key) => {
							return (
								<li className="list-group-item" key={key}>
									{todoElement}
								</li>
							);
						})}
						<li className="list-group-item">Make the bed</li>
						<li className="list-group-item">Wash my hands</li>
					</ul>
					<h3 className="m-0">
						<i className="fas fa-check-circle text-success"></i>
						<i className="fas fa-minus-circle text-danger"></i>
					</h3>
				</div>
			</div>
		</div>
	);
}
