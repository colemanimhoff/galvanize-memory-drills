const database = require('./database-connection')

module.exports = {
    list(){
        return database('resolutions').select()
    },
    read(id){
        return database('resolutions').select().where('id', id).first()
    },
    create(resolution){
        return database('resolutions')
            .insert(resolution)
            .returning('*')
            .then(resolution => resolution[0])
    },
    update(id, resolution){
        return database('resolutions')
            .update(resolution)
            .where('id', id)
            .returning('*')
            .then(resolution => resolution[0])

    },
    delete(id){
        return database('resolutions').delete().where('id', id)
    }
}
