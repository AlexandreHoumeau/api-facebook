const Tickets = require('../../models/ticketing')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.TicketModel = connect.model('Tickets', Tickets)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.delete('/ticket/delete/:id', jwt.express(), (req, res) => {
      try {
        const { id } = req.params
        this.TicketModel.findByIdAndDelete(id).then(ticket => {
          res.status(200).json(ticket || {})
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
