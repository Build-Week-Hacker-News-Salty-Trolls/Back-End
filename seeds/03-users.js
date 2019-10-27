
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'username0', password:"password", favorite_id: 1},
        {id: 2, username: 'username1', password:"pa$$word", favorite_id: 3},
        {id: 3, username: 'username2', password:"p&ssword", favorite_id: 2}
      ]);
    });
};
