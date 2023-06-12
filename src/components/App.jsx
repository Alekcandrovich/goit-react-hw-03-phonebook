import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (newContact) => {
    const isContactExists = this.state.contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExists) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  onDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  getFiltereContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFiltereContacts();

    return (
      <div className="container">
        <h1 className="heading">Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.handleAddContact} />
        <h2 className="contacts_title">Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.onDeleteContact}
          />
        ) : (
          <p className="contacts_not">No contacts found</p>
        )}
      </div>
    );
  }
}

export default App;