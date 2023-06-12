import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import css from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    };
    this.props.onAddContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

return (
  <form className={css.form} onSubmit={this.handleSubmit}>
    <label className={css.label} htmlFor="nameInput">
      Name
    </label>
    <input
      className={css.input}
      id="nameInput"
      type="text"
      name="name"
      value={name}
      onChange={this.handleNameChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <label className={css.label} htmlFor="numberInput">
      Number
    </label>
    <input
      className={css.input}
      id="numberInput"
      type="tel"
      name="number"
      value={number}
      onChange={this.handleNumberChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <button className={css.button} type="submit">
      Add contact
    </button>
  </form>
);
} }

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;