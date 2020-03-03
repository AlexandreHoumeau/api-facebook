const Album = require('../../models/albums')
const Event = require('../../models/event')
const JWT = require('../../jwt')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)
    this.EventModel = connect.model('Event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.post('/album/create/', jwt.express(), async (req, res) => {
      try {
        const albumModel = new this.AlbumModel(req.body)
        const event = await this.EventModel.findById(req.body.event)
        
        // Check if Id event exist in DB
        if (!event) {
          return res.status(403).json('Invalid Event ID')
        }

        // Check if participant Id exist in DB
        if (req.body.albums[0].participant && !event.participants.includes(req.body.albums[0].participant)) {
          return res.status(403).json('Invalid participant ID')
        }

        // Check id participant Id who post a message exist in DB 
        if (req.body.albums[0].comments[0].participant && !event.participants.includes(req.body.albums[0].comments[0].participant)) {
          return res.status(403).json('Invalid comments participant ID')
        }
        await albumModel.save()
        res.status(201).send({albumModel})
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

module.exports = Create
