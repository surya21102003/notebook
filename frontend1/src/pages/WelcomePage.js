import React from 'react';
import NotesList from '../components/NotesList';

function WelcomePage({ user }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Welcome, {user.name || user.email}
            </h1>
            <NotesList />
        </div>
    );
}

export default WelcomePage;
