import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css"

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contact_box}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

