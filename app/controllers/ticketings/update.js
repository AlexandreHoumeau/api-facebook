const Tickets = require('../../models/ticketing')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.TicketModel = connect.model('Tickets', Tickets)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.put('/ticket/update/:id', jwt.express(), (req, res) => {
      const { id } = req.params
      const { body } = req
      const update = {
        $addToSet: {
          tickets: body.tickets
        }
      }
      
      this.TicketModel.findByIdAndUpdate(id, update, {new: true}).then(event => {
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
