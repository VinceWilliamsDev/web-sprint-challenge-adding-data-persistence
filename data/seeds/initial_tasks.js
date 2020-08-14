
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {projectId: 1, description: 'create the Projects table', notes: 'Use knex migrations to create the table' },
        {projectId: 2, description: 'create seed data for the Projects table', notes: 'Use knex seed ' },
        {projectId: 3, description: 'Create the Express server', notes: 'Initialize the server'}
      ]);
    });
};
