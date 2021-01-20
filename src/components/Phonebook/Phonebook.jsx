import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import style from './style/_phonebook.module.scss';
import Filter from './Filter/Filter';

export default class Phonebook extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
		],
		filter: ''
	};

	addContact = (data) => {
		this.setState((prevState) => {
			return {
				contacts: [...prevState.contacts, data]
			};
		});
	};

	deleteContact = (itemId) => {
		this.setState((prevState) => {
			return {
				contacts: prevState.contacts.filter((contact) => contact.id !== itemId)
			};
		});
	};

	checkContact = (name) => {
		const { contacts } = this.state;
		const duplicate = contacts.find((contact) => contact.name === name);
		if (duplicate) {
			alert(`${name} is already in contacts.`);
		}
		return !duplicate;
	};

	changeFilter = (event) => {
		this.setState({ filter: event.currentTarget.value });
	};

	getFilter = () => {
		const { filter, contacts } = this.state;
		const normalizedFilter = filter.toLocaleLowerCase();

		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};

	render() {
		const { contacts, filter } = this.state;
		let visibleFilter;
		if (filter) {
			visibleFilter = this.getFilter();
		} else {
			visibleFilter = contacts;
		}

		return (
			<>
				<Wrapper>
					<div className={style.phonebookWrapper}>
						<h1 className={style.title}>Phonebook</h1>
						<Form
							checkContact={this.checkContact}
							addContact={this.addContact}
							isValidInputContact={this.isValidInputContact}
						/>
					</div>
					<div className={style.contactsWrapper}>
						<h1 className="contacts">Contacts</h1>
						<p>Find contact by name</p>
						<Filter value={filter} changeFilter={this.changeFilter} />
						<ul className={style.list}>
							<ContactList
								deleteContact={this.deleteContact}
								contacts={visibleFilter}
							/>
						</ul>
					</div>
				</Wrapper>
			</>
		);
	}
}
