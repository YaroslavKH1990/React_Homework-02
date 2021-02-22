import React from 'react';
import { connect } from 'react-redux';
import phoneActions from '../../../redux/Phonebook/phonebook-action';
import style from './_contactList.module.scss';

const ContactList = ({ contacts, deleteContact }) => {
	return (
		<>
			{contacts.map(({ name, number, id }) => (
				<li className={style.list__item} key={id}>
					{name} : {number}
					<button
						onClick={() => deleteContact(id)}
						type="button"
						className={style.btn}
					>
						Delete
					</button>
				</li>
			))}
		</>
	);
};

const visibleFilter = (filter, contacts) => {
	const normalizedFilter = filter.toLocaleLowerCase();

	return contacts.filter((contact) =>
		contact.name.toLocaleLowerCase().includes(normalizedFilter)
	);
};

const mapStateToProps = ({ phonebook: { filter, contacts } }) => ({
	contacts: visibleFilter(filter, contacts)
});

const mapDispatchToProps = (dispatch) => ({
	deleteContact: (id) => dispatch(phoneActions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
