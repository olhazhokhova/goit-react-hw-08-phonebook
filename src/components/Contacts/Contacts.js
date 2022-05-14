import { useFetchContactsQuery } from 'redux/contacts';

import Container from '../Container';
import Spinner from '../Spinner';

import AddContacts from './AddContacts';
import ContactList from './ContactList';
import Filter from './Filter';

import s from './Contacts.module.css';

const Contacts = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <Container>
      <div className={s.wrap}>
        <h1>Phonebook</h1>
        <AddContacts contacts={contacts} />

        {isFetching && <Spinner />}

        {contacts?.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactList contacts={contacts} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Contacts;
