import React, { Component } from 'react';
import shortid from 'shortid';
import style from './_form.module.scss';

export default class Form extends Component {
	state = {
		name: '',
		number: ''
	};

	nameInputId = shortid.generate();
	numberInputId = shortid.generate();

	handleChange = (event) => {
		const { name, value } = event.currentTarget;

		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state.name);

		if (this.props.checkContact(this.state.name)) {
			this.props.addContact({ id: shortid.generate(), ...this.state });
			this.reset();
		}
	};

	reset = () => {
		this.setState({ name: '', number: '' });
	};

	render() {
		return (
			<>
				<form className={style.form} onSubmit={this.handleSubmit}>
					<label className={style.label} htmlFor={this.nameInputId}>
						Name
						<input
							className={style.input_first}
							value={this.state.name}
							type="text"
							name="name"
							id={this.nameInputId}
							onChange={this.handleChange}
						/>
					</label>
					<label className={style.label} htmlFor={this.numberInputId}>
						Number
						<input
							className={style.input_second}
							value={this.state.number}
							type="text"
							name="number"
							id={this.numberInputId}
							onChange={this.handleChange}
						/>
					</label>
					<button className={style.btn} type="submit">
						Add contact
					</button>
				</form>
			</>
		);
	}
}
