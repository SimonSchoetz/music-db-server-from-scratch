const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const file = new FileSync('db.json')
const db = low(file)

// Set some defaults
db.defaults({ contacts: [] })
    .write()