const mongoose = require('mongoose')
const JWT = require('../jwt')
const jwt = new JWT()

const Schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  token: {
    type: String,
    required: true
  },
  gender: String,
  height: Number,
  weight: Number,
  city: String,
  cityCode: Number,
  street_number: Number,
  street_type: String,
  street_name: String,
  phone: String,
  image_profil: {
    type: String
  }
}, {
  collection: 'users', 
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

Schema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user = this
  const token = jwt.jwtgenerator(user)
  user.token = token
  await user.save()
  return token
}

module.exports = Schema
