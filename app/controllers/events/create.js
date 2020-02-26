const Event = require('../../models/event')
const User = require('../../models/users.js')
const JWT = require('../../jwt')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', Event)
    this.UserModel = connect.model('User', User)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.post('/event/create/', jwt.express(), async (req, res) => {
      try {
        const eventModel = new this.EventModel(req.body)
        await eventModel.generateAdmin(req.headers['token'], this.UserModel)
        res.status(201).send({eventModel})
      } catch (err) {
        console.log(err)
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }
  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Create
