const User = require('../models/User');
const sendOTP = require('../utils/sendOTP');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email required" });

        let user = await User.findOne({ email });
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        if (!user) {
            user = await User.create({ email, otp });
        } else {
            user.otp = otp;
            await user.save();
        }

        await sendOTP(email, otp);
        res.json({ message: "OTP sent to your email" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        user.otp = null;
        await user.save();

        res.json({ token, user: { email: user.email, name: user.name } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
