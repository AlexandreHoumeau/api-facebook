const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ShoppingListSchema = new mongoose.Schema({
  event: {
    type: ObjectId
  },
  name: String,
  qty: Number,
  arrival_time: Date,
  bring: String,
  created_at: { type: Date, default: Date.now }
}, {
  collection: 'shopping_list',
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = ShoppingListSchema
