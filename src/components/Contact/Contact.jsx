import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; // Імпортуємо асинхронний екшн
import styles from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)); // Викликаємо deleteContact з id контакту
  };

  return (
    <li className={styles.contact_item}>
      {contact.name}: {contact.number}
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;


