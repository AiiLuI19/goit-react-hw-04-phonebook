import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Phonebook.module.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    onSubmit(contact);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <div className={s.btnWrap}>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;

// class Form extends Component {
//   state = {
//     name: ' ',
//     number: '',
//   };
//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = evt => {
//     evt.preventDefault();

//     this.props.onSubmit({ ...this.state, id: nanoid() });
//     this.reset();
//   };
//   reset = () => this.setState({ name: '', number: '' });

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             className={s.input}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <div className={s.btnWrap}>
//           <button className={s.btn} type="submit">
//             Add contact
//           </button>
//         </div>
//       </form>
//     );
//   }
// }
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default Form;
