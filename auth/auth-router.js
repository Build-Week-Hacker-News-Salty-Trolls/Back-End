const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');


// USERS FUNCTIONALITY 
const Users = require('../users/users-model');



// Authorization for creating a user 
router.post('/register', (req, res) => {
    // Implementing registration 
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
});

// Authorization for login
router.post('/login', (req, res)=>{
    // Implementing Login 
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if ( user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({ message: `Welcome ${user.username}!`,
                token,
             });
        }   else {
            res.status(401).json({ message: 'Invalid Credentials'})
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});


function generateToken(user) {
    const payload = {
        username: user.username,
        id: user.id,
    };

    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;