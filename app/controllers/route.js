// Users
const Create = require('./users/create.js')
const Show = require('./users/show.js')
const Delete = require('./users/delete.js')
const Update = require('./users/update.js')

// Events
const CreateEvents = require('./events/create')
const ShowEvents = require('./events/show.js')
const DeleteEvents = require('./events/delete.js')
const UpdateEvents = require('./events/update.js')

module.exports = {
  users: {
    Create,
    Show, 
    Delete,
    Update
  },
  events: {
    CreateEvents,
    ShowEvents, 
    DeleteEvents,
    UpdateEvents
  }
}
