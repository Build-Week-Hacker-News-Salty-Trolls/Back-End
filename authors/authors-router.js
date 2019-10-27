const router = require('express').Router();
const axios = require('axios');




router.get('/saltyuser', (req, res) => {

    axios
        .get(`https://salty-salt.herokuapp.com/salty-users`)
        .then(author => {
            res.status(200).json(author.data);
        });
})


module.exports = router;