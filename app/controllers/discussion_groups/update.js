const Discsussion = require('../../models/discussion_groups')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.DiscussionModel = connect.model('Discsussion', Discsussion)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.put('/discussion/update/:id', jwt.express(), (req, res) => {
      const { id } = req.params
      const { body } = req
      const update = {
        $addToSet: {
          message: body.message,
          admin: body.admin,
          users: body.users
        }
      }
      if (body.name) update.name = body.name
      
      this.DiscussionModel.findByIdAndUpdate(id, update, {new: true}).then(event => {
        res.status(200).json(event || {})
      }).catch(err => {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      })
    })
  }
  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Update
