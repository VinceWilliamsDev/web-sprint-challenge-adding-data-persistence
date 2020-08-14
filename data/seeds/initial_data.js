
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {projectName: 'Make a Database', description: 'Use knex.js to create tables and columns', completed: 0},
        {projectName: 'Seed the Database', description: 'Create seed data for the Projects database', completed: 0},
        {projectName: 'Build an API', description: 'Write endpoints in Express.js to interact with the database', completed: 0}
      ]);
    });
};
