
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"VIN": "JN1HS36P2LW140218", "make": "356", "model": "Porsche", "mileage": 120000, "transmission": "manual", "title-status": "clean"},
        {"VIN": "1MEBM62F2JH693379", "make": "911 Turbo", "model": "Porsche", "mileage": 79000, "transmission": "manual", "title-status": "clean"},
        {"VIN": "JNKCA21D2VT502228", "make": "250 GT", "model": "Ferrari", "mileage": 95000, "transmission": "manual", "title-status": "clean"}
      ]);
    });
};
