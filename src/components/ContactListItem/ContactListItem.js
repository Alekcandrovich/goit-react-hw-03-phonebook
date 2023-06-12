import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contactListItem.module.css';

class ContactListItem extends Component {
  handleDeleteContact = () => {
    const { onDeleteContact, contact} = this.props;
    onDeleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;
    return (
      <li key={contact.id} className={css.contactsItem}>
        {contact.name}: {contact.number}{' '}
        <button
          className={css.deleteButton}
          type="button"
          onClick={this.handleDeleteContact}
        >
          Delete
        </button>
      </li>
    );
  }
}
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;