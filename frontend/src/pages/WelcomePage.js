import React from 'react';
import NotesList from '../components/NotesList';
import welcomeback from '../images/welcomeback.png';
function WelcomePage({ user }) {
    return (
        <div className="p-4 border border-black rounded bg-blue-400 " style={{backgroundImage: `url(${welcomeback})`, backgroundSize: 'cover'}}>
            <h1 className="text-2xl border border-black bg-white text-blue-500 font-bold mb-4 p-2 rounded">
               <span className='text-blue-500 border-blue-500 ' style={{fontFamily:'cursive'}}> Welcome,</span> <br /> <span className='' style={{fontFamily:'cursive'}}>{user.name || user.email}</span>
            </h1>
            <NotesList />
        </div>
    );
}

export default WelcomePage;
