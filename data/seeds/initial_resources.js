
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {projectId: 1, name: 'Knex', description: 'library for interacting with relational databases with JS'},
        {projectId: 2, name: 'Node', description: 'JS runtime environment for using JS outside of the browser'},
        {projectId: 3, name: 'Express', description: 'JS web server library'}
      ]);
    });
};
