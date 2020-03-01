const Discussion = require('../../models/discussion_groups')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.DiscussionModel = connect.model('Discussion', Discussion)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/discussion/show/:id', jwt.express(), (req, res) => {
      const { id, token } = req.params

      if (jwt.getToken(token)) {
        this.DiscussionModel.findById(id).then(user => {
          res.status(200).json(user || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } else {
        res.status(401).json({
          'code': 401,
          'message': 'Access Denied' 
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

module.exports = Show
