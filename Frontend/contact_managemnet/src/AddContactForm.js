// src/components/AddContactForm.js

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';


const AddContactForm = ({ onSubmit, contact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: ''
  });

  // Load existing contact data if editing
  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: ''
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <TextField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        {contact ? 'Update Contact' : 'Add Contact'}
      </Button>
    </Box>
  );
};

export default AddContactForm;
