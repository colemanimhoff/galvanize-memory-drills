exports.seed = (knex, Promise) => {
  return knex('resolutions').del()
    .then( () => {
      return knex('resolutions').insert([
        { id: 1, dueDate: '1997-02-01', resolution: 'Go skiing' },
        { id: 2, dueDate: '1997-05-01', resolution: 'Do stand-up' },
        { id: 3, dueDate: '1997-09-01', resolution: 'Start knitting' }
      ]).then(() => {
        return knex.raw('ALTER SEQUENCE resolutions_id_seq RESTART WITH 4;')
    })
    })
}