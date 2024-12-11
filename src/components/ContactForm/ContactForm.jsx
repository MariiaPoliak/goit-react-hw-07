import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps'; // Замість прямого імпорту з contactsSlice
import styles from './ContactForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Створення нового контакту без id, оскільки його надає сервер
    const newContact = {
      name,
      number,
    };

    // Додаємо контакт через асинхронний екшен
    dispatch(addContact(newContact));

    // Очищаємо поля після додавання
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className={styles.input}
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number"
        required
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        <span className={styles.icon}>+</span> Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
