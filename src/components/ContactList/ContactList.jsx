import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList } from "./ContactList.styled";

export const ContactList = ({ contacts, onRemoveContact }) => (
    <ContactsList>
         {contacts && contacts.map(contact => (
            <ContactItem id={contact.id} name={contact.name} number={contact.number} onRemoveContact={onRemoveContact} />
        ))}
    </ContactsList>
);