
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('VIN', 17).unique();
    table.string('make', 50);
    table.string('model', 50);
    table.integer('mileage');
    table.string('transmission', 25);
    table.string('title-status', 50);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
