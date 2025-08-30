const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getNotes, addNote, deleteNote } = require('../controllers/notesController');

router.use(auth);

router.get('/', getNotes);
router.post('/', addNote);
router.delete('/:id', deleteNote);

module.exports = router;
