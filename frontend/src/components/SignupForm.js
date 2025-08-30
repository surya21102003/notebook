import React, { useState } from 'react';
import api from '../api/api';
function SignupForm({ onVerified }) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');

    const sendOtp = async () => {
        try {
            await api.post('/auth/signup', { email });
            setStep(2);
            setError('');
        } catch (err) {
            setError(err.response?.data.message || 'Error sending OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const res = await api.post('/auth/verify-otp', { email, otp });
            localStorage.setItem('token', res.data.token);
            onVerified(res.data.user);
        } catch (err) {
            setError(err.response?.data.message || 'Invalid OTP');
        }
    };

    return (
        <div className="p-4 w-300 border border-black  bg-white mx-auto mt-1 border rounded shadow-lg">
            {step === 1 && (
                <>
                    <h2 className="text-xl font-bold mb-4" style={{fontFamily:'cursive'}}>Sign Up / Login</h2>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border placeholder-black border-black  p-2 w-full mb-2 rounded"
                   style={{fontFamily:'cursive'}}
                   />
                    <button
                        onClick={sendOtp}
                        className="bg-blue-500 text-white p-2 w-full rounded"
                   style={{fontFamily:'cursive'}}
                   >
                        Send OTP
                    </button>
                </>
            )}
            {step === 2 && (
                <>
                    <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
                    <input
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <button
                        onClick={verifyOtp}
                        className="bg-green-500 text-white p-2 w-full rounded"
                    >
                        Verify OTP
                    </button>
                </>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}

export default SignupForm;
