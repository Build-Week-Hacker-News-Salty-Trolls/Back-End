const router = require('express').Router();


// Bring in functionality 
const Users = require('./users-model');



// Need to install middleware for authentication 


router.get('/users', (req, res) => {
    Users.find()
        .first()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => res.send(error));
});


module.exports = router;