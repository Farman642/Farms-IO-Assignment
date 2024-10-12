const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('User routes are working!');
});


router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send({ user });
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});

router.post('/register', async (req, res) => {
    try {
    const { name, email, password } = req.body;

        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send({ user, message: "User Created Successfully" });
    }

    catch (err) {
        res.status(400).send({ error: err });
    }

});
router.post('/login', async (req, res) => {
   try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user){
        throw new Error('Unable to login , invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error('Unable to login , invalid credentials');
    }

    const token = jwt.sign({
        _id: user._id.toString()
    }, process.env.JWT_SECRET_KEY );

    res.send({ user, token , message: "Logged in successfully"});
   }
    catch (err) {
        res.status(400).send({ error: err });
    }
 });

module.exports = router;