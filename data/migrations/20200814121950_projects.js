
exports.up = function(knex) {
    return knex.schema
      .createTable('Projects', tbl => {
          tbl.increments('id')
          tbl.text('projectName', 128)
              .notNullable()
              .unique()
          tbl.text('description')
          tbl.boolean('completed')
              .defaultTo(0)
      })
      .createTable('Tasks', tbl => {
          tbl.increments('id')
          tbl.integer('projectId')
              .unsigned()
              .references('Projects.id')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE')
          tbl.text('description')
              .notNullable()
          tbl.text('notes')
          tbl.boolean('completed')
              .defaultTo(0)
      })
      .createTable('Resources', tbl => {
          tbl.increments('id')
          tbl.integer('projectId')
              .unsigned()
              .references('Projects.id')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE')
          tbl.text('name')
              .unique()
              .notNullable()
          tbl.text('description')
      })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTableIfExists('Resources')
      knex.schema.dropTableIfExists('Tasks')
      knex.schema.dropTableIfExists('Projects')
  };
  