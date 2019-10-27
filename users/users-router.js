const router = require('express').Router();
const db = require('../database/dbConfig')

// Bring in functionality 
const Users = require('./users-model');



// Need to install middleware for authentication 


router.get('/users', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => res.send(error));
});


router.put('/users/:id', (req, res)=> {
    db('users')
        .where({ id: req.params.id})
        .update(req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err.message);
        })
})

router.delete('/users/:id', (req, res)=> {
    db('users')
        .where({ id: req.params.id})
        .del()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err.message);
        })
});

module.exports = router;