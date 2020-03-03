const Album = require('../../models/albums')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.delete('/album/delete/:id', jwt.express(), (req, res) => {
      try {
        const { id } = req.params
        this.AlbumModel.findByIdAndDelete(id).then(album => {
          res.status(200).json(album || {})
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
