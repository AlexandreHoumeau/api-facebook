const ShoppingList = require('../../models/shopping_list')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.ShoppingModel = connect.model('ShoppingList', ShoppingList)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/shopping/show/:id', jwt.express(), (req, res) => {
      const { id, token } = req.params

      if (jwt.getToken(token)) {
        this.ShoppingModel.findById(id).then(list => {
          res.status(200).json(list || {})
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
