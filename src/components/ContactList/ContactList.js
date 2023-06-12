import React, { Component } from "react";
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import css from './contactList.module.css';

class ContactList extends Component {
  onDeleteContact = contactId => {
    const { onDeleteContact } = this.props;
    onDeleteContact(contactId);
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul className={css.contactsList}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={this.onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;