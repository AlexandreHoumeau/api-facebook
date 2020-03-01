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

// Groups
const CreateGroups = require('./groups/create')
const ShowGroups = require('./groups/show.js')
const DeleteGroups = require('./groups/delete.js')
const UpdateGroups = require('./groups/update.js')

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
  },
  groups: {
    CreateGroups,
    ShowGroups, 
    DeleteGroups,
    UpdateGroups
  }
}
