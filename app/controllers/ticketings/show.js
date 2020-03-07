const Tickets = require('../../models/ticketing')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.TicketsModel = connect.model('Tickets', Tickets)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/ticket/show/:id', jwt.express(), (req, res) => {
      const { id, token } = req.params

      if (jwt.getToken(token)) {
        this.TicketsModel.findById(id).then(ticket => {
          res.status(200).json(ticket || {})
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
