
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorite_Comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_Comments').insert([
        {id: 1, comment_id: 1},
        {id: 2, comment_id: 2},
        {id: 3, comment_id: 3}
      ]);
    });
};
