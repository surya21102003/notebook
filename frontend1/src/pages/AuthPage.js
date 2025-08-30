import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';
import WelcomePage from './WelcomePage';

function AuthPage() {
    const [user, setUser] = useState(null);

    return (
        <div>
            {!user ? <SignupForm onVerified={setUser} /> : <WelcomePage user={user} />}
        </div>
    );
}

export default AuthPage;
