import React, { useEffect, useState } from 'react';
import api from '../api/api';
function NotesList() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');

    const fetchNotes = async () => {
        try {
            const res = await api.get('/notes');
            setNotes(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const addNote = async () => {
        if (!content) return;
        try {
            await api.post('/notes', { content });
            setContent('');
            fetchNotes();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteNote = async (id) => {
        try {
            await api.delete(`/notes/${id}`);
            fetchNotes();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { fetchNotes(); }, []);

    return (
        <div className="max-w-md border border-black mx-auto mt-4 p-4 border rounded shadow-md">
            <div className="flex mb-2 border border-black rounded-md">
                <input
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Enter note"
                    className="border-black placeholder-blue-500 p-2 flex-1 rounded"
              style={{fontFamily:'cursive'}}
              />
                <button
                    onClick={addNote}
                    className="bg-blue-500 text-white p-2 ml-2 rounded" style={{fontFamily:'cursive'}}
                >
                    Add
                </button>
            </div>
            {notes.map(note => (
                <div key={note._id} className="border border-black bg-blue-400 p-2 mb-2 flex justify-between items-center rounded">
                    <span className='' style={{fontFamily:'cursive'}}>{note.content}</span>
                    <button
                        onClick={() => deleteNote(note._id)}
                        className=" text-black h-8 w-20 bg-red-600 rounded font-bold"
                  style={{fontFamily:'cursive'}}
                  >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default NotesList;
