const Discussion = require('../../models/discussion_groups')
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
    this.DiscussionModel = connect.model('Discussion', Discussion)
    this.UserModel = connect.model('User', User)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.post('/discussion/create/', jwt.express(), async (req, res) => {
      try {
        const { body } = req
        if (body.group && body.event) {
          return res.status(403).json('Impossible to associate discussion to event and Group')
        }
        const discussionModel = new this.DiscussionModel(req.body)
        await discussionModel.generateAdmin(req.headers['token'], this.UserModel)
        res.status(201).send({discussionModel})
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
