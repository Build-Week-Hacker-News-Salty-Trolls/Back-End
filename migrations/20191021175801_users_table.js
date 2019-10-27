
exports.up = function(knex) {
  return knex.schema
  .createTable('Articles', articles => {
    articles.increments();
    articles
      .string('author');
    articles
      .string('comment');
      articles
      .integer('salty_score');
      articles
      .integer('ranking');
  })
  .createTable('favorite_Comments', comment => {
    comment.increments();
    comment
      .integer('comment_id').references('id').inTable('Articles');
    // comment
    //   .integer('user_id').unsigned()
    //   .references('id').inTable('users');
 })
  .createTable('users', users => {
        users.increments();
        users
            .string('username', 255)
            .notNullable()
            .unique();
        users.string('password', 255).notNullable();
        users.integer('favorite_id')
        .references('id')
        .inTable('favorite_Comments')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  });

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('Articles')
  .dropTableIfExists('users')
  .dropTableIfExists('favorite_Comments');
};
