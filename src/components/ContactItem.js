import PropTypes from 'prop-types';
import s from './Phonebook.module.css';
const ContactItem = ({ name, deleteContact, id, number }) => (
  <>
    <div>&#128222; {name}: </div>
    <div className={s.number}> {number} </div>
    <button
      className={s.btnClose}
      type="button"
      onClick={() => deleteContact(id)}
    >
      &#10008;
    </button>
  </>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
