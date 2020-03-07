const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const SurveySchema = new mongoose.Schema({
  event: {
    type: ObjectId,
    required: true
  },
  questions: [{
    ask: String,
    possible_response: [String],
    responses: [{
      participant: ObjectId,
      response: Number,
      created_at: {type: Date, default: Date.now}
    }],
    created_at: {type: Date, default: Date.now}
  }],
  created_at: { type: Date, default: Date.now }
}, {
  collection: 'surveys',
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = SurveySchema
