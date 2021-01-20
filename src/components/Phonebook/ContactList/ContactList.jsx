import React from 'react';
import style from './_contactList.module.scss';

const ContactList = ({ contacts, deleteContact }) => {
	// console.log(contacts);
	return (
		<>
			{contacts.map((contact) => (
				<li className={style.list__item} key={contact.id}>
					{contact.name} : {contact.number}
					<button
						onClick={() => deleteContact(contact.id)}
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

export default ContactList;
