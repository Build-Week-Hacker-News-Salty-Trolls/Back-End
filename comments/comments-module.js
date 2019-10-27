const db = require('../database/dbConfig');



module.exports = {
    getAllComments
};


function getAllComments() {
    return db('Articles').select('id', 'author', 'comment');
}