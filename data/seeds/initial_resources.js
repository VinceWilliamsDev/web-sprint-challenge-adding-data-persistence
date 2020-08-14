
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {name: 'Knex', description: 'library for interacting with relational databases with JS'},
        {name: 'Node', description: 'JS runtime environment for using JS outside of the browser'},
        {name: 'Express', description: 'JS web server library'}
      ]);
    });
};
