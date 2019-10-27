const router = require('express').Router();
const axios = require('axios');




router.get('/comments', (req, res) => {
        

    axios.get(`https://salty-salt.herokuapp.com/user-comments/wnight`)
   
        .then(data => {
           
                res.status(200).json(data.data);
            })
          .catch(err => {
              res.status(500).json(err.message);
          })  
        });
    



module.exports = router; 