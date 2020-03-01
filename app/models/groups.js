const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  cover_photo: String,
  public: Boolean,
  admin: {
    type: [],
    require: true
  },
  member: Object,
  created_at: { type: Date, default: Date.now }
}, {
  collection: 'groups', 
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
  const group = this
  const user = await userModel.findOne({token: tk}, (err, collection) => {
    if (err) {
      return err
    }
    return collection
  })
  group.admin = user._doc._id
  await group.save()
  return group
}

module.exports = Schema
