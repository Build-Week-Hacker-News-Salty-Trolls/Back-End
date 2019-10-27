
exports.up = function(knex) {
   return knex.schema
    .createTable('favorite_Comments', comment => {
      comment
        .integer('comment_id').unsigned();
      // comment
      //   .foreign('author_id').references('Author');
   })

  //  knex.schema
  //  .createTable('Author', author => {
  //     author
  //     .integer('author_id').unique();
  //     author
  //       .string('author', 255)
  //       .string('comments');
  //  })
};

exports.down = function(knex) {
  return knex.schema
    // .dropTableIfExists('Author')
    .dropTableIfExists('favorite_Comments');
};
