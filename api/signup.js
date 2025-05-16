const bcrypt = require('bcryptjs');
const { saveUser } = require('../Controllers/DBController');
const jwt = require('jsonwebtoken');
const { signToken } = require('../middleware/auth');



// You should store this in an environment variable


exports.signUp = async function(req, res) {
    const { email, password } = req.body;

    // Hash the password
    const hashed = await bcrypt.hash(password, 10);

    // Save the user (your function to store it somewhere)
    const user = await saveUser({
        email,
        password: hashed,
    });

    // Generate JWT token
    const token = signToken({email:user.email});

    // Set token as HTTP-only cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // set to true in prod
        sameSite: 'strict',
        maxAge: 3600000, // 1 hour
    });

    res.status(201).json({
        status:"sucess",
        message: 'User created',
        data: user,
        token,
    });
};
