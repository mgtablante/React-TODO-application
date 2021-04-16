import React, { useState } from "react";
// import PropTypes from "prop-types";
//create your first component

export function Home() {
	const [todo, setTodo] = useState(["Make the bed", "Wash my hands"]);
	const [inputValue, setInputValue] = useState("");

	const handleChange = () => {
		setInputValue(event.target.value);
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
					onChange={handleChange}></input>
				<button className="btn btn-block btn-primary"> Agregar</button>
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
