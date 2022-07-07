import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import s from './components/Phonebook.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const formSubmitHandler = data => {
    console.log(data.name);

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      Notify.warning(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [data, ...prevState]);
  };
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value.toLowerCase());
  };
  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
}
export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     console.log(data.name);

//     if (
//       this.state.contacts.some(
//         ({ name }) => name.toLowerCase() === data.name.toLowerCase()
//       )
//     ) {
//       Notify.warning(`${data.name} is already in contacts`);
//       return;
//     }
//     this.setState({ contacts: [data, ...this.state.contacts] });
//   };
//   changeFilter = evt => {
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({
//         contacts: parsedContacts,
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   render() {
//     const normalize = this.state.filter.toLowerCase();
//     const filterContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalize)
//     );
//     return (
//       <div className={s.container}>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <Contacts
//           contacts={filterContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
// export default App;
