const ShoppingList = require('../../models/shopping_list')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.ShoppingModel = connect.model('ShoppingList', ShoppingList)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.put('/shopping/update/:id', jwt.express(), (req, res) => {
      const { id } = req.params
      const { body } = req

      this.ShoppingModel.findByIdAndUpdate(id, body, {new: true}).then(list => {
        res.status(200).json(list || {})
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
