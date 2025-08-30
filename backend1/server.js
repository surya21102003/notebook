const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/notesRoutes');

const app = express();
app.use(cors({
origin:"https://app-cdd9.onrender.com",
    methods:"GET,POST,PUT,DELETE",
    credentials:true;
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

