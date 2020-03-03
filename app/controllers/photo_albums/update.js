const Album = require('../../models/albums')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.put('/album/update/:id', jwt.express(), (req, res) => {
      const { id } = req.params
      const { body } = req
      const update = {
        $addToSet: {
          albums: body.albums
        }
      }      
      this.AlbumModel.findByIdAndUpdate(id, update, {new: true}).then(event => {
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
