import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './Phonebook.module.css';
const Contacts = ({ contacts, deleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ name, id, number }) => (
      <li key={id} className={s.item}>
        <ContactItem
          name={name}
          deleteContact={deleteContact}
          id={id}
          number={number}
        />
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default Contacts;
