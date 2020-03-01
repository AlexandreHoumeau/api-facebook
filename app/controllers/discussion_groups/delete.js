const Discussion = require('../../models/discussion_groups')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.DiscussionModel = connect.model('Discussion', Discussion)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.delete('/discussion/delete/:id', jwt.express(), (req, res) => {
      try {
        const { id } = req.params
        this.DiscussionModel.findByIdAndDelete(id).then(event => {
          res.status(200).json(event || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
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

module.exports = Delete
