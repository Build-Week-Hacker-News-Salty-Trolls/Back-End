
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('Articles').insert([
        {id: 1, author: 'frank', comment:"empty text", salty_score: 3, ranking: 1},
        {id: 2, author: 'bill', comment:"empty text", salty_score: 5, ranking: 2},
        {id: 3, author: 'joe', comment:"empty text", salty_score: 8, ranking: 3},
        {id: 4, author: 'nick', comment:"empty text", salty_score: 4, ranking: 6},
        {id: 5, author: 'heath', comment:"empty text", salty_score: 9, ranking: 4},
        {id: 6, author: 'batman', comment:"empty text", salty_score: 2, ranking: 5}
      ]);
    });
};
