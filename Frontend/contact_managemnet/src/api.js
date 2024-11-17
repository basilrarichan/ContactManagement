import axios from 'axios';

const api = axios.create({
      baseURL: 'http://localhost:5000/api'
})

export const  createContact = (contactData)=>
api.post('/contacts',contactData);
export const getContact = () => api.get('/contacts')
export const updateContact = (id,contactData)=>api.put(`/contacts/${id}`,contactData);
export const deleteContact = (id)=>api.delete(`/contacts/${id}`); 
