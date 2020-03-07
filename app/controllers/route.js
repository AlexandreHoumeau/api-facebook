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

// Discussion_group
const CreateDiscussion = require('./discussion_groups/create')
const ShowDiscussion = require('./discussion_groups/show.js')
const DeleteDiscussion = require('./discussion_groups/delete.js')
const UpdateDiscussion = require('./discussion_groups/update.js')

// Photo_albums
const CreateAlbum = require('./photo_albums/create')
const ShowAlbum = require('./photo_albums/show.js')
const DeleteAlbum = require('./photo_albums/delete.js')
const UpdateAlbum = require('./photo_albums/update.js')

// Survey
const CreateSurvey = require('./surveys/create')
const ShowSurvey = require('./surveys/show.js')
const DeleteSurvey = require('./surveys/delete.js')
const UpdateSurvey = require('./surveys/update.js')

// Photo_albums
const CreateTickets = require('./ticketings/create')
const ShowTickets = require('./ticketings/show.js')
const DeleteTickets = require('./ticketings/delete.js')
const UpdateTickets = require('./ticketings/update.js')

// Photo_albums
const CreateShopping = require('./shopping_lists/create')
const ShowShopping = require('./shopping_lists/show.js')
const DeleteShopping = require('./shopping_lists/delete.js')
const UpdateShopping = require('./shopping_lists/update.js')

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
  },
  discussion_groups: {
    CreateDiscussion,
    ShowDiscussion,
    DeleteDiscussion,
    UpdateDiscussion
  },
  photo_albums: {
    CreateAlbum,
    ShowAlbum,
    DeleteAlbum,
    UpdateAlbum
  },
  survey: {
    CreateSurvey,
    ShowSurvey,
    DeleteSurvey,
    UpdateSurvey
  },
  tickets: {
    CreateTickets,
    ShowTickets,
    DeleteTickets,
    UpdateTickets
  },
  shopping_lists: {
    CreateShopping,
    ShowShopping,
    DeleteShopping,
    UpdateShopping
  }
}
