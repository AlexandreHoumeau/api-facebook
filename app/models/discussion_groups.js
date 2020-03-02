const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const DiscussionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: [{
    user: ObjectId,
    content: String,
    created_at: {type: Date, default: Date.now}
  }],
  group: ObjectId,
  event: ObjectId,
  admin: {
    type: [],
    require: true
  },
  users: {
    type: []
  },
  created_at: { type: Date, default: Date.now }
}, {
  collection: 'discussion_group',
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

DiscussionSchema.methods.generateAdmin = async function (tk, userModel) {
  // Generate an admin from token
  const discussion = this
  const user = await userModel.findOne({token: tk}, (err, collection) => {
    if (err) {
      return err
    }
    return collection
  })
  discussion.admin = user._doc._id
  await discussion.save()
  return discussion
}

module.exports = DiscussionSchema
