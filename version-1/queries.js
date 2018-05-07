const database = require('./database-connection')

module.exports = {
    list(){
        return database('resolutions').select()
    },
    read(id){
    },
    create(resolution){
    },
    update(id, resolution){
    },
    delete(id){
    }
}
