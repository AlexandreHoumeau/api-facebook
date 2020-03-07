const Tickets = require('../../models/ticketing')
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
    this.TicketsModel = connect.model('Tickets', Tickets)
    this.EventModel = connect.model('Event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.post('/tickets/create/', jwt.express(), async (req, res) => {
      try {
        const ticketsModel = new this.TicketsModel(req.body)
        const event = await this.EventModel.findById(req.body.event)

        // Check if Id event exist in DB
        if (!event) {
          return res.status(403).json('Invalid Event ID')
        }

        await ticketsModel.save()
        res.status(201).send({ticketsModel})
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
