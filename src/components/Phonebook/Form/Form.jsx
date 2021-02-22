import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import style from './_form.module.scss';
import phoneActions from '../../../redux/Phonebook/phonebook-action';

class Form extends Component {
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

		const duplicate = this.props.phonebook.contacts.find(
			(contact) => contact.name === this.state.name
		);

		if (duplicate) {
			alert(`${this.state.name} is already in contacts.`);
		} else {
			this.props.onSubmit(this.state);
		}

		this.reset();
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

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (text) => dispatch(phoneActions.addContact(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
