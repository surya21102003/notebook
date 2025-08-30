import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';
import WelcomePage from './WelcomePage';
import backgroundImage from '../images/back1.png';
function AuthPage() {
    const [user, setUser] = useState(null);

    return (
        <div className="min-h-screen bg-purple-500 flex items-center justify-center bg-gray-100" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
            {!user ? <SignupForm onVerified={setUser} /> : <WelcomePage user={user} />}
        </div>
    );
}

export default AuthPage;
