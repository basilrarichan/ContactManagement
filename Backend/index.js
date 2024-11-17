const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 


require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const contactsRoute = require('./routes/contact'); 
// Use routes
app.use('/api', contactsRoute);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));
