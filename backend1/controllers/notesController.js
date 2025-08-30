const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
};

exports.addNote = async (req, res) => {
    const note = await Note.create({ userId: req.user.id, content: req.body.content });
    res.json(note);
};

exports.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
};
