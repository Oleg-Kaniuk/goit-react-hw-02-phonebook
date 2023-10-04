import { Component } from "react";
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MainContainer } from "./App.styled";

import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

    onSubmitForm = data => {
    const obj = { ...data, id: nanoid() };
    this.setState(({ contacts }) => {
      if (this.newName(contacts, obj) === undefined) {
        return { contacts: [...contacts, obj] }
      } else {
        Notify.warning(`${obj.name} is already in contacts`, {
          width: '300px',
          position: 'right-top',
          timeout: 2000,
          fontSize: '20px',
        });
        return { contacts: [...contacts] }
      };
    });
  }

   newName = (contacts, obj) => {
     return contacts.find(({ name }) => 
      name.toLowerCase() === obj.name.toLowerCase())
  }

  render() {

    return (
      <MainContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} />
        <h2>Contacts</h2>
      </MainContainer>
    );
  };
}
