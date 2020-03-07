const Survey = require('../../models/survey')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Survey', Survey)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/survey/show/:id', jwt.express(), (req, res) => {
      const { id, token } = req.params

      if (jwt.getToken(token)) {
        this.SurveyModel.findById(id).then(survey => {
          res.status(200).json(survey || {})
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
