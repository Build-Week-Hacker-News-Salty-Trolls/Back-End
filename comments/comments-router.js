const router = require('express').Router();

const comments = require('./comments-module');

const restricted = require('../auth/auth-middleware');

router.get('/comments', restricted, (req, res) => {
    const id = req.params.id;
   
    comments.getAllComments(id)
        .then(data => {
            res.status(200).json(data);
            })
          .catch(err => {
              res.status(500).json(err.message);
          })  
        });
 




module.exports = router; 