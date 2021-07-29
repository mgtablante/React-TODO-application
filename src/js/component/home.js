import React, { useState } from "react";
import "../../styles/index.scss";
// import PropTypes from "prop-types";
//create your first component

export function Home() {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleChange = event => {
		setInputValue(event.target.value);
		setInputValue.current.value = null;
	};
	const handleKeyPress = event => {
		if (event.key === "Enter") {
			setTodo([...todo, inputValue]);
			setInputValue.current.value = null;
		}
	};
	const deleteNow = (index, event) => {
		let newTodo = [...todo];
		let removed = newTodo.splice(index, 1);
		setTodo(newTodo);
	};
	return (
		<div className="container">
			<h1 className="text-center">ToDo List!</h1>
			<from className="Formulario">
				<input
					value={inputValue}
					type="text"
					placeholder="What needs to be done?"
					className="form-control my-4"
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					autoFocus></input>
			</from>
			<div className="listElements">
				<div className=" d-flex align-items-center">
					<ul className="col">
						{todo.map((todoElement, key) => {
							return (
								<li className="list-group-item" key={key}>
									{todoElement}
									<button
										className="button"
										onClick={event =>
											deleteNow(key, event)
										}>
										<i className="fas fa-trash-alt" />
									</button>
								</li>
							);
						})}
						<li className="list-group-item">Study HTML and CSS</li>
						<li className="list-group-item">learn JavaScript</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
