const ShoppingList = require('../../models/shopping_list')
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
    this.ShoppingModel = connect.model('ShoppingList', ShoppingList)
    this.EventModel = connect.model('Event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.post('/shopping/create/', jwt.express(), async (req, res) => {
      try {
        const shoppingModel = new this.ShoppingModel(req.body)
        const event = await this.EventModel.findById(req.body.event)

        if (!event) {
          return res.status(403).json('Invalid Event ID')
        }

        shoppingModel.save()
        res.status(201).send({shoppingModel})
      } catch (err) {
        console.log(err)
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
