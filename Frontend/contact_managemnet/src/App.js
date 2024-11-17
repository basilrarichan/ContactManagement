import React,{useState} from 'react';
import AddContactForm from './AddContactForm';
import ContactTable from './ContactsTable';
import { getContact, updateContact,createContact } from './api';



function App() {
  const[contact,setContact] = useState([]);
  const[selectedContact,setSelectedContact] = useState(null);//data that is for edittig
  
  const handleEdit= (contact)=>{
    setSelectedContact(contact)
  };

  const handleContactAddedOrUpdated = async () => {
    const updatedContacts = await getContact();
    setContact(updatedContacts);
    setSelectedContact(null);
  };
  const handleUpdate = async (updatedData) => {
    if (selectedContact) {
      await updateContact(selectedContact._id, updatedData);
      handleContactAddedOrUpdated();
    }
  };



  return (
    <div>
      <h1>Content Management</h1>
      {selectedContact ?(
        <AddContactForm onSubmit={handleUpdate} contact={selectedContact}/>
      ):(
        <AddContactForm onSubmit={createContact}  onContactAdded={handleContactAddedOrUpdated}/>
      )
    }
   
    <ContactTable onEdit={handleEdit}/>
      
    </div>
  );
}

export default App;
 