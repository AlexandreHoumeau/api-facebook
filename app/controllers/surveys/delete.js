const Survey = require('../../models/survey')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Survey', Survey)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.delete('/survey/delete/:id', jwt.express(), (req, res) => {
      try {
        const { id } = req.params
        this.SurveyModel.findByIdAndDelete(id).then(survey => {
          res.status(200).json(survey || {})
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
