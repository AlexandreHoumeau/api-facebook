const Group = require('../../models/groups')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.delete('/group/delete/:id', jwt.express(), (req, res) => {
      try {
        const { id } = req.params
        this.GroupModel.findByIdAndDelete(id).then(event => {
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
