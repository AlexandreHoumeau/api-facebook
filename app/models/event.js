const mongoose = require('mongoose')
// const JWT = require('../jwt')
// const jwt = new JWT()

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date_start: {
    type: Date
    // required: true
  },
  date_end: {
    type: Date 
    // required: true
  },
  location: String,
  cover_photo: String,
  public: Boolean,
  id_admin: {
    type: Object,
    require: true
  },
  particpants: Object
}, {
  collection: 'events', 
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

Schema.methods.generateAdmin = async function (tk, userModel) {
  // Generate an admin from token
  const event = this
  const user = await userModel.findOne({token: tk}, (err, collection) => {
    if (err) {
      return err
    }
    return collection
  })
  event.id_admin = user._doc._id
  await event.save()
  return event
}

module.exports = Schema
