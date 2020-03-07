const ShoppingList = require('../../models/shopping_list')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.ShoppingModel = connect.model('ShoppingList', ShoppingList)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.delete('/shopping/delete/:id', jwt.express(), (req, res) => {
      try {
        const { id } = req.params
        this.ShoppingModel.findByIdAndDelete(id).then(list => {
          res.status(200).json(list || {})
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
