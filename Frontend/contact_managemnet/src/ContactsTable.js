import React, { useEffect, useState } from "react";
import { getContact, deleteContact } from "./api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const ConstantsTable = ({ onEdit }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContact().then((response) => {
      setContacts(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    console.log("Life is beautiful");
    console.log(id);
    await deleteContact(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Job Title</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
              <TableCell align="center">
                <Button onClick={() => onEdit(contact)} color="primary">
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(contact._id)}
                  color="secondary"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConstantsTable;
